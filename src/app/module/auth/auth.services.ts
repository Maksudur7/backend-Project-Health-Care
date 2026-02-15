import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

interface IRegisterPatientPayload {
    name: string;
    email: string;
    password: string;
}

const registerPatient = async (payload: IRegisterPatientPayload) => {
    const { name, email, password } = payload;

    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            role: "PATIENT",
        }
    });

    if (!data || !data.user) {
        throw new Error("Failed to register patient");
    }

    // আপনার ট্রানজেকশন এর আইডিয়াটা ভালো। 
    // যদি প্রিজমা দিয়ে এক্সট্রা কোনো টেবিলে ডাটা সেভ করতে চান তবে এখানে করবেন।
    /*
    const patient = await prisma.$transaction(async (tx) => {
         return await tx.patient.create({
             data: {
                 userId: data.user.id,
                 // অন্যান্য ডাটা
             }
         });
    });
    */

    return data;
}

interface ILoginUserPaylod {
    email: string;
    password: string;
}

const loginUser = async (payload: ILoginUserPaylod) => {
    const { email, password } = payload;
    const data = await auth.api.signInEmail({
        body: {
            email,
            password
        }
    })

    if (data.user.status === UserStatus.BLOCKED) {
        throw new Error("User is blocked")
    }

    if (data.user.isDeleted || data.user.status === UserStatus.DELETED) {
        throw new Error("User is deleted")
    }

    return data;
}

export const AuthService = {
    registerPatient,
    loginUser
}
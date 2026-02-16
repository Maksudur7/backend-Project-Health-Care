import { prisma } from "../../lib/prisma"

const getAllDcotors = async () => {
    const doctors = await prisma.doctor.findMany({
        include: {
            user: true,
            specialties: {
                include: {
                    specialty: true
                }
            }
        }
    })
    return doctors
}

export const doctorService = {
    getAllDcotors
}
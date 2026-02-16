import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { UserServices } from "./user.services";


const createDoctor = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;

        const result = await UserServices.createDoctor(payload);

        sendResponse(res, {
            httpStatusCode: status.CREATED,
            success: true,
            message: "Doctor registered successfully",
            data: result,
        })
    }
)

export const UserController = {
    createDoctor,
};
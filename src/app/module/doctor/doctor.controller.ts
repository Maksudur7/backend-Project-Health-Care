import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { doctorService } from "./doctor.services";
import status from "http-status";

const getAllDcotors = catchAsync(
    async (req: Request, res: Response) => {

        const result = await doctorService.getAllDcotors();

        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctor registered successfully",
            data: result,
        })
    }
)





export const DoctorController ={
    getAllDcotors
}
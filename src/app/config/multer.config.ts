import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinaryUpload } from "./cloudinary.config";
import multer from "multer";

const storage = new CloudinaryStorage({
    cloudinary: cloudinaryUpload,
    params: async (req, file) => {
        const originalName = file.originalname;
        const extension = originalName.split(".").pop()?.toLocaleLowerCase();

        // eslint-disable-next-line no-useless-escape
        const fileNameWithoutExtensiton = originalName.split(".").slice(0, -1).join(".").toLocaleLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

        const uniqueName = Math.random().toString(36).substring(2) + "-" + Date.now() + "-" + fileNameWithoutExtensiton
        const folder = extension === "pdf" ? "fdfs" : "images";

        return {
            folder: `ph-helthcare/${folder}`,
            public_id: uniqueName,
            resoource_type: "auto"
        }
    }
})

export const multerUplod = multer({ storage })
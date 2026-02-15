import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty.route";

 const router = Router()

 router.use("/specialties", SpecialtyRoutes)

 export const IndexRoute = router
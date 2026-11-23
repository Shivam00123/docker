import { Router } from "express";
import { getJsonDataConytroller } from "../controllers/jsonData.controller.js";

const jsonDataRouter = Router();

jsonDataRouter.get("/", getJsonDataConytroller);

export default jsonDataRouter;

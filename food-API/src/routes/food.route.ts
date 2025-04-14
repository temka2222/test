import { Router } from "express";
import { getFood } from "../controllers/category/food/get-food";
import { deleteFood } from "../controllers/category/food/delete-food";
const foodRouter = Router();

foodRouter.get("/food", getFood).delete("/food", deleteFood);

export default foodRouter;

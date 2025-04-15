import { foodModel } from "../models/food.model";
import { Request, Response } from "express";

export const createFood = async (req, res) => {
  try {
    const food = await foodModel.create(req.body);
    return res.status(200).json({ createfood: food });
  } catch (error) {
    console.log(error);
  }
};

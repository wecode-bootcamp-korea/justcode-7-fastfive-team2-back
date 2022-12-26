import subhomeService from "../services/subhome.service";
import { Request, Response } from "express";

const getSubhome = async (req: Request, res: Response) => {
  try {
    const result = await subhomeService.getSubhome();
    res.status(200).json(result);
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export default {
  getSubhome,
};

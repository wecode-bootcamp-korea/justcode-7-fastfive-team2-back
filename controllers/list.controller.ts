import listService from "../services/list.service";
import { Request, Response } from "express";

// 전체보기
const getlist = async (req: Request, res: Response) => {
  try {
    const { place_id, category_id, category_detail_id } = req.query;
    const result = await listService.getlist(
      place_id,
      category_id,
      category_detail_id
    );
    res.status(200).json(result);
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

//
const getlistbyCategory = async (req: Request, res: Response) => {
  try {
    const category_id = req.params.category_id;
    const { place_id, category_detail_id } = req.query;
    const result = await listService.getlistbyCategory(
      place_id,
      category_id,
      category_detail_id
    );
    res.status(200).json(result);
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
export default {
  getlist,
  getlistbyCategory,
};

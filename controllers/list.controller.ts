import listService from "../services/list.service";
import { Request, Response } from "express";

const getlist = async (req: Request, res: Response) => {
  try {
    const { place_id, category_id, category_detail_id } = req.query; //무조건 스트링으로 들어오게되어있음
    const result = await listService.getlist(
      place_id ? Number(place_id) : undefined,
      category_id ? Number(category_id) : undefined,
      category_detail_id ? Number(category_detail_id) : undefined
    );
    res.status(200).json(result);
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

//

export default {
  getlist,
};

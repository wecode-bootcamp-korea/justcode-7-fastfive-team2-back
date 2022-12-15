import { Request, Response } from "express";
import corporationService from "../services/corporation.service";

const findCorporationDetail = async (req: Request, res: Response) => {
  try {
    const corporationId = req.params.id;
    let [data] = await corporationService.findCorporationDetail(corporationId);
    res.status(200).json({ message: "success", data });
  } catch (err: any) {
    console.log(err);
    res.status(err.statusCode).json({ message: err.message });
  }
};

export default {
  findCorporationDetail,
};

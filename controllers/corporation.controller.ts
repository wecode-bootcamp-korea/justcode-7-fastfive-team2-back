import { Request, Response } from "express";
import corporationService from "../services/corporation.service";
import { checkDataIsNotEmpty } from "../util/myutil";

const findCorporationDetail = async (req: Request, res: Response) => {
  try {
    const corporationId = req.params.id;

    checkDataIsNotEmpty(corporationId);

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

import { Request, Response } from "express";
import corporationService from "../services/corporation.service";
import { checkDataIsNotEmpty } from "../util/myutil";
import { CorporationInfo } from "../type";

const posting = async (req: Request, res: Response) => {
  const {
    categoryName,
    corporationName,
    image,
    introduction,
    field,
    corporationNumber,
    introFile,
    placeName,
    detailName,
    url,
    detailIntro,
    membersBenefits,
  } = req.body;

  const posting_required_keys: CorporationInfo = {
    categoryName,
    corporationName,
    image,
    introduction,
    field,
    corporationNumber,
    introFile,
    placeName,
    detailName,
  };

  checkDataIsNotEmpty(posting_required_keys);

  const postCorporation = await corporationService.posting(
    categoryName,
    corporationName,
    image,
    introduction,
    field,
    corporationNumber,
    introFile,
    placeName,
    detailName,
    url,
    detailIntro,
    membersBenefits
  );

  res.status(201).json({ message: "CREATED_POST", postCorporation });
};

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
  posting,
  findCorporationDetail,
};

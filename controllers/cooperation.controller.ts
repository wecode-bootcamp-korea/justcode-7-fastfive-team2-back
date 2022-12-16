import { Request, Response } from "express";
import cooperationService from "../services/cooperation.service";
import { checkDataIsNotEmpty } from "../util/myutil";

type posting_required_keys_type = {
  category: string;
  cooperationName: string;
  cooperationImage: string;
  cooperationIntroduction: string;
  cooperationField: string;
  cooperationNumber: string;
  cooperationFile: string;
  cooperationPlace: string;
  category_detail?: string;
  cooperationURL?: string;
  cooperationDetail?: string;
  membersBenefit?: string;
};

const posting = async (req: Request, res: Response) => {
  const {
    category,
    category_detail,
    cooperationName,
    cooperationImage,
    cooperationIntroduction,
    cooperationURL,
    cooperationField,
    cooperationDetail,
    membersBenefit,
    cooperationNumber,
    cooperationFile,
    cooperationPlace,
  } = req.body;

  const posting_required_keys: posting_required_keys_type = {
    category,
    cooperationName,
    cooperationImage,
    cooperationIntroduction,
    cooperationField,
    cooperationNumber,
    cooperationFile,
    cooperationPlace,
  };

  checkDataIsNotEmpty(posting_required_keys);

  const postCooperation = await cooperationService.postCooperation(
    category,
    category_detail,
    cooperationName,
    cooperationImage,
    cooperationIntroduction,
    cooperationURL,
    cooperationField,
    cooperationDetail,
    membersBenefit,
    cooperationNumber,
    cooperationFile,
    cooperationPlace
  );

  res.status(201).json({ message: "CREATED_POST", postCooperation });
};

export default {
  posting,
};

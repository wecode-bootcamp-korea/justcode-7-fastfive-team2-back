import { Request, Response } from "express";
import cooperationService from "../services/cooperation.service";

type posting_required_keys_type = {
  category: string;
  cooperationName: string;
  cooperationImage: string;
  cooperationIntroduction: string;
  cooperationURL?: string;
  cooperationField: string;
  cooperationDetail?: string;
  membersBenefit?: string;
  cooperationNumber: string;
  cooperationFile: string;
  cooperationPlace: string;
};

const posting = async (req: Request, res: Response) => {
  const {
    category,
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

  // const posting_required_keys: posting_required_keys_type = {
  //   category,
  //   cooperationName,
  //   cooperationImage,
  //   cooperationIntroduction,
  //   cooperationField,
  //   cooperationNumber,
  //   cooperationFile,
  //   cooperationPlace,
  // };

  // Object.keys(posting_required_keys).map((key) => {
  //   if (!posting_required_keys[key]) {
  //     throw new Error(`KEY_ERROR: ${key}`);
  //   }
  // });

  const postCooperation = await cooperationService.postCooperation(
    category,
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

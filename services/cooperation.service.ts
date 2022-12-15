import { cooperationInfo } from "../type";
import cooperationDao from "../models/cooperation.dao";

const postCooperation = async (
  category: string,
  cooperationName: string,
  cooperationImage: string,
  cooperationIntroduction: string,
  cooperationURL: string,
  cooperationField: string,
  cooperationDetail: string,
  membersBenefit: string,
  cooperationNumber: string,
  cooperationFile: string,
  cooperationPlace: string
): Promise<cooperationInfo> => {
  const postCooperation: any = await cooperationDao.postCooperation(
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

  return postCooperation;
};

export default {
  postCooperation,
};

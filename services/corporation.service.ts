import corporationDao from "../models/corporation.dao";
import { Corporation, CorporationInfo } from "../type";

const posting = async (
  categoryName: string,
  corporationName: string,
  image: string,
  introduction: string,
  field: string,
  corporationNumber: string,
  introFile: string,
  placeName: string,
  detailName?: string,
  url?: string,
  detailIntro?: string,
  membersBenefits?: string
): Promise<CorporationInfo> => {
  const postCooperation: any = await corporationDao.posting(
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

  return postCooperation;
};

const findCorporationDetail = async (
  corporationId: string
): Promise<Corporation[]> => {
  return await corporationDao.findCorporationDetail(corporationId);
};

export default {
  posting,
  findCorporationDetail,
};

import corporationDao from "../models/corporation.dao";
import { Corporation } from "../type";

const findCorporationDetail = async (
  corporationId: string
): Promise<Corporation[]> => {
  return await corporationDao.findCorporationDetail(corporationId);
};

export default {
  findCorporationDetail,
};

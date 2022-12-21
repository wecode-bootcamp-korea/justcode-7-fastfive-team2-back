import listDao from "../models/list.dao";
import { Example, listinfo } from "../type";

//전체보기: 지역, 카테고리, 상세분야 필터링 O
const getlist = async (
  place_id?: number,
  category_id?: number,
  category_detail_id?: number
): Promise<listinfo[]> => {
  let getList = await listDao.getlist(
    place_id,
    category_id,
    category_detail_id
  );
  if (getList.length === 0) {
    throw new Error("검색결과가 없습니다.");
  }

  return getList;
};

export default { getlist };

import listDao from "../models/list.dao";
import { listinfo } from "../type";

const getDropdown = async (category_id?: number) => {
  const result = await listDao.getDropdown(category_id);

  const places = result.a[0].places;
  const categories = result.b[0].categories;
  const categories_detail = result.c[0].category_detail;

  return {
    places,
    categories,
    categories_detail,
  };
};

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
    throw new Error("no_search_data");
  }

  return getList;
};

export default { getDropdown, getlist };

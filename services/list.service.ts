import listDao from "../models/list.dao";
import { listinfo } from "../type";

const getDropdown = async () => {
  const result = await listDao.getDropdown();

  const places = result.place[0].places;
  const categories = result.category[0].categories;

  return {
    places,
    categories,
  };
};

const getDropdownDetail = async (category_id?: number) => {
  const result = await listDao.getDropdownDetail(category_id);
  const categories_detail = result.detail[0].category_detail;
  return {
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
  // if (getList.length === 0) {
  //   throw new Error("no_search_data");
  // } 프론트에서 터짐.. 에러처리 백엔드에서 이부분 처리하는게 맞나?

  return getList;
};

export default { getDropdown, getDropdownDetail, getlist };

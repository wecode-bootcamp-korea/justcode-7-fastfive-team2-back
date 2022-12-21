import listDao from "../models/list.dao";

//전체보기: 지역, 카테고리, 상세분야 필터링 O
const getlist = async (
  place_id?: number,
  category_id?: number,
  category_detail_id?: number
): Promise<any> => {
  let condition: string;

  if (place_id && category_id && category_detail_id) {
    condition = `
    WHERE 
    place_id = ${place_id}
    AND category_id = ${category_id}
    AND category_detail_id = ${category_detail_id}
      `;
    return await listDao.getlist(condition);
  } else if (place_id && category_id && category_detail_id === undefined) {
    condition = `
    WHERE 
    place_id = ${place_id}
    AND category_id = ${category_id}
    `;
    return await listDao.getlist(condition);
  } else if (
    place_id &&
    category_id === undefined &&
    category_detail_id === undefined
  ) {
    condition = `
    WHERE 
    place_id = ${place_id}
    `;
    return await listDao.getlist(condition);
  } else if (
    place_id === undefined &&
    category_id === undefined &&
    category_detail_id === undefined
  ) {
    condition = `
      ORDER BY 
    updated_at DESC
    `;
    return await listDao.getlist(condition);
  }
};

const getlistbyCategory = async (
  place_id?: number,
  category_id?: number,
  category_detail_id?: number
) => {
  let condition: string;

  if (place_id && category_id && category_detail_id) {
    condition = `
    WHERE 
    place_id = ${place_id}
    AND category_id = ${category_id}
    AND category_detail_id = ${category_detail_id}
      `;
    return await listDao.getlistbyCategory(condition);
  } else if (place_id && category_id && category_detail_id === undefined) {
    condition = `
    WHERE 
    place_id = ${place_id}
    AND category_id = ${category_id}
    `;
    return await listDao.getlistbyCategory(condition);
  } else if (place_id === undefined && category_id && category_detail_id) {
    condition = `
    WHERE 
    category_id = ${category_id}
    AND category_detail_id = ${category_detail_id}
    `;
    return await listDao.getlistbyCategory(condition);
  } else if (
    place_id === undefined &&
    category_id &&
    category_detail_id === undefined
  ) {
    condition = `
      ORDER BY 
    updated_at DESC
    `;
    return await listDao.getlistbyCategory(condition);
  }
};

export default { getlist, getlistbyCategory };

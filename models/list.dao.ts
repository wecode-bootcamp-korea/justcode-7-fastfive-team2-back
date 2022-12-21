import myDataSource from "./index";

//전체보기: 최신순 - 필터링 X

const getlist = async (condition: string) => {
  let allList = await myDataSource.query(`
  SELECT
    corporation_name, image, introduction 
  FROM 
    corporation
  ${condition}
  `);
  return allList;
};

export default { getlist };

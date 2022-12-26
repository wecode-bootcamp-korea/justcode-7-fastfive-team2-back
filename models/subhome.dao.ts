import myDataSource from "./index";

const getSubhome = async () => {
  let subhomepost = await myDataSource.query(`
  SELECT
  category_name, category_image, category_description 
  FROM categories
  `);
  return subhomepost;
};

export default { getSubhome };

import myDataSource from "./index";

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
) => {
  await myDataSource.query(
    `
        INSERT INTO corporation (
          category_id, 
          corporation_name,
          image, 
          introduction, 
          url, 
          field, 
          detail_introduction, 
          members_benefits, 
          corporation_number, 
          introduction_file, 
          place_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
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
    ]
  );
};

export default {
  postCooperation,
};

import myDataSource from "./index";

const posting = async (
  category: string,
  cooperationName: string,
  cooperationImage: string,
  cooperationIntroduction: string,
  cooperationField: string,
  cooperationNumber: string,
  cooperationFile: string,
  cooperationPlace: string,
  category_detail?: string,
  cooperationURL?: string,
  cooperationDetail?: string,
  membersBenefit?: string
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
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      category,
      category_detail,
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

const findCorporationDetail = async (corporationId: string) => {
  return await myDataSource.query(
    `
    SELECT
      categories.category_name AS categoryName,
      c.corporation_name AS corporationName,
      c.image,
      c.introduction,
      c.url,
      c.field,
      c.detail_introduction AS detailIntro,
      c.members_benefits AS membersBenefits,
      c.introduction_file AS introFile,
      places.place_name AS placeName
    FROM
      corporation c
    LEFT JOIN
      categories
    ON
      c.category_id = categories.id
    LEFT JOIN
      places
    ON
      c.place_id = places.id
    WHERE
      c.id = ?
  `,
    [corporationId]
  );
};

export default {
  posting,
  findCorporationDetail,
};

import myDataSource from "./index";

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
  findCorporationDetail,
};

import myDataSource from "./index";

const getlist = async (
  place_id?: number,
  category_id?: number,
  category_detail_id?: number
) => {
  // ***변수가 3개니 모든 경우의 수를 나열한다지만 변수가 많다면??? - 리팩 필요
  //console.log(place_id, category_id, category_detail_id); - 콘솔 습관화
  let condition; //**타입지정안해줘도됨?
  if (place_id && category_id && category_detail_id) {
    condition = `
  WHERE
    place_id = ${place_id}
  AND
    category_id = ${category_id}
  AND
    category_detail_id = ${category_detail_id}
    `;
  } else if (place_id === undefined && category_id && category_detail_id) {
    console.log(1);
    condition = `
  WHERE
    category_id = ${category_id}
  AND
    category_detail_id = ${category_detail_id}
  `;
  } else if (place_id && category_id && category_detail_id === undefined) {
    console.log(2);
    condition = `
  WHERE
    place_id = ${place_id}
  AND
    category_id = ${category_id}
  `;
  } else if (
    place_id === undefined &&
    category_id &&
    category_detail_id === undefined
  ) {
    console.log(3);
    condition = `
  WHERE
    category_id = ${category_id}
  `;
  } else if (
    place_id &&
    category_id === undefined &&
    category_detail_id === undefined
  ) {
    console.log(4);
    condition = `
WHERE
  place_id = ${place_id}
`;
  } else if (
    place_id === undefined &&
    category_id === undefined &&
    category_detail_id === undefined
  ) {
    console.log(5);

    condition = `
  ORDER BY
    updated_at DESC
  `;
  }

  return await myDataSource.query(`
  SELECT
    corporation_name, image, introduction 
  FROM 
    corporation
    ${condition}
  `);
};

export default { getlist };

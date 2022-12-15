export function checkDataIsNotEmpty(targetData: any) {
  Object.keys(targetData).forEach((key) => {
    if (!targetData[key]) throw { status: 400, message: `add ${key} value` };
  });
}

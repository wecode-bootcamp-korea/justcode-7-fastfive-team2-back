import subhomeDao from "../models/subhome.dao";

const getSubhome = async () => {
  const getsubhome = await subhomeDao.getSubhome();
  return getsubhome;
};

export default { getSubhome };

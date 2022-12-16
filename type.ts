export interface Corporation {
  categoryName: string;
  corporationName: string;
  image: string;
  introduction: string;
  url: string;
  field: string;
  detailIntro: string;
  membersBenefits: string;
  introFile: string;
  placeName: string;
}

export interface User {
  email: string;
  password: string;
}

export interface cooperationInfo {
  category: string;
  cooperationName: string;
  cooperationImage: string;
  cooperationIntroduction: string;
  cooperationField: string;
  cooperationNumber: string;
  cooperationFile: string;
  cooperationPlace: string;
  category_detail?: string;
  cooperationURL?: string;
  cooperationDetail?: string;
  membersBenefit?: string;
}

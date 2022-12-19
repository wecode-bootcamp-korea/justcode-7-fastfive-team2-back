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

export interface CorporationInfo {
  categoryName: string;
  corporationName: string;
  image: string;
  introduction: string;
  field: string;
  corporationNumber: string;
  introFile: string;
  placeName: string;
  detailName?: string;
  url?: string;
  detailIntro?: string;
  membersBenefits?: string;
}

export interface Request {
  userInfo?: object;
}

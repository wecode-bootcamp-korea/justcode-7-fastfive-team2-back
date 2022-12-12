import { User } from "../type";
import userDao from "../models/userDao";

const signUp = async (email: string, password: string): Promise<User> => {
  const user = {
    id: 1,
    email: JSON.parse(email),
    age: 33,
  };
  return user;
};

// listInfo = [...listInfo].map(item => {
// 	return { ...item, books: JSON.parse(item.books) };
// });
// return listInfo;

export default {
  signUp,
};

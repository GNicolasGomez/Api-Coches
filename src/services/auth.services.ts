import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/auth.models";
import { encrypt, verified } from "../utils/bcrypt.handle";

const registerNewUser = async (authUser: User) => {
  const { email, password, name } = authUser;

  const passEncrypt = await encrypt(password);


  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREDY_USER_REGISTERED";
  const registerNewUser = await UserModel.create({
    email,
    password: passEncrypt,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({email, password}:Auth) => {
    const checkIs = await UserModel.findOne({ email });

    if (!checkIs) return "NOT_FOUND_USER_REGISTER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECTO";

    return checkIs

};

export { registerNewUser, loginUser };

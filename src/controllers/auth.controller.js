import bcrypt from "bcrypt";
import { loginService } from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginService(email).select("+password");

    if (!user) {
      return res.status(404).send({ message: "User or password not found" });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(404).send({ message: "User or password not found" });
    }
    return res.status(200).send({ message: "Login Ok" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

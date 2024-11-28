import usermodel from "../Model/login.model.js";
import bcrypt from "bcrypt";

const handlelogin = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      response.status(401).json({ message: "filed cannot be empty" });
    }
    const saltrounds = 10;

    const hashedpassword = await bcrypt.hash(password, saltrounds);

    const newUser = await usermodel.create({ email, password: hashedpassword });

    response.status(200).json({ message: "user created successfully" });
  } catch (error) {
    console.log(`Error while creating`);
    response
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};

export default handlelogin;

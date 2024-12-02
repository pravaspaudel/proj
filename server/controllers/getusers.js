import usermodel from "../Model/login.model.js";

const getusers = async (request, response) => {
  try {
    const finduser = await usermodel.find().select("username");

    response.json({ finduser });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Error fetching users", error: `${error.message}` });
  }
};

export default getusers;

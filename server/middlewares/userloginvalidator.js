import joi from "joi";

const Schema = joi.object({
  username: joi.string().min(3).max(15).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const userloginvalidator = (request, response, next) => {
  const validate = Schema.validate(request.body);

  const { error } = validate;

  if (error) {
    response.status(400).json("message:{error while }");
  } else {
    next();
  }
};

export default userloginvalidator;

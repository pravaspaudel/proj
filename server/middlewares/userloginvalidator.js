import joi from "joi";

const Schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const userloginvalidator = (request, response, next) => {
  const validate = Schema.validate(request.body);

  const { error } = validate;

  if (error) {
    response
      .status(400)
      .json({ message: "some error of validator", error: error.message });
  } else {
    next();
  }
};

export default userloginvalidator;

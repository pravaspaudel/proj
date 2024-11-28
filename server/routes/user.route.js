import express from "express";
import handlelogin from "../controllers/handlelogin.js";
import userloginvalidator from "../middlewares/userloginvalidator.js";

const router = express.Router();

router.route("/login").post(userloginvalidator, handlelogin);

export default router;

import express from "express";
import handlelogin from "../controllers/handlelogin.js";
import userloginvalidator from "../middlewares/userloginvalidator.js";
import getusers from "../controllers/getusers.js";

const router = express.Router();

router.route("/login").post(userloginvalidator, handlelogin);
router.route("/users").get(getusers);

export default router;

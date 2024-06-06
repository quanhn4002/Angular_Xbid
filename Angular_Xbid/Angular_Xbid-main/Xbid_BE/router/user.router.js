import { signin, lognin } from "../controllers/user.controllers.js";
import express from "express";
const router = express.Router();
router.post("/signin", signin);
router.post("/lognin", lognin);
export default router;

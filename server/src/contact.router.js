import { Router } from "express";
import contactController from "./contact.controller.js";

const router = Router();

router.post("/", contactController.submit);
router.get("/", contactController.list);

export default router;

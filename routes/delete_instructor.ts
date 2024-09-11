import express from "express";
import deleteInstructorController from "../controllers/delete-instructor-controller";

const router = express.Router();

router.delete('/',deleteInstructorController);

export default router;
import express from "express";
import deleteInstructorController from "../controllers/delete-instructor-controller";
import deleteInstructorValidator from '../middleware/DeleteInstructorValidator';
const router = express.Router();

router.delete('/',deleteInstructorValidator.validatorParams,deleteInstructorValidator.validator,deleteInstructorController);

export default router;
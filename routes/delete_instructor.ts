import express from "express";
import deleteInstructorController from "../controllers/delete-instructor-controller";
import deleteInstructorValidator from '../middleware/DeleteInstructorValidator';
import verifyToken from "../middleware/VerifyToken";
const router = express.Router();

router.delete('/',verifyToken,deleteInstructorValidator.validatorParams,deleteInstructorValidator.validator,deleteInstructorController);

export default router;
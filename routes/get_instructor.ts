import express from 'express';
import getInstructorController from '../controllers/get-instructor-controller';
import getInstructorValidator from '../middleware/GetInstructorValidator';
import verifyToken from '../middleware/VerifyToken';

const router = express.Router();

router.get('/',verifyToken,getInstructorValidator.validatorParams, getInstructorValidator.validator, getInstructorController);


export default router;
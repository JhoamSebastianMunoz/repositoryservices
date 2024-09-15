import express from 'express';
import getInstructorController from '../controllers/get-instructor-controller';
import getInstructorValidator from '../middleware/GetInstructorValidator';

const router = express.Router();


router.get('/',getInstructorValidator.validatorParams,getInstructorValidator.validator,getInstructorController);


export default router;
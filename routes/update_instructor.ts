import express from 'express';
import registerValidator from '../middleware/RegisterValidator';
import updateInstructorController from '../controllers/update-instructor-controller';

const router = express.Router();

router.put('/',registerValidator.validatorParams,registerValidator.validator ,updateInstructorController);

export default router;
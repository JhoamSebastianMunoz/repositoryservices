import express from 'express';
import registerValidator from '../middleware/RegisterValidator';
import updateInstructorController from '../controllers/update-instructor-controller';
import verifyToken from '../middleware/VerifyToken';

const router = express.Router();

router.put('/',verifyToken,registerValidator.validatorParams,registerValidator.validator ,updateInstructorController);

export default router;
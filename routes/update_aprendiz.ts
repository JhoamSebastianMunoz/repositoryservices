import express from 'express';
import updateAprendizController from '../controllers/update-aprendiz-controller';
import RegisterValidatorAprendiz from '../middleware/RegisterValidatorAprendiz';
import verifyToken from '../middleware/VerifyToken';

const router = express.Router();

router.put('/',verifyToken,RegisterValidatorAprendiz.validatorParams, RegisterValidatorAprendiz.validator ,updateAprendizController);

export default router;
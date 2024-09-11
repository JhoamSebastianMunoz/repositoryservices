import express from 'express';
import updateAprendizController from '../controllers/update-aprendiz-controller';
import RegisterValidatorAprendiz from '../middleware/RegisterValidatorAprendiz';

const router = express.Router();

router.put('/',RegisterValidatorAprendiz.validatorParams, RegisterValidatorAprendiz.validator ,updateAprendizController);

export default router;
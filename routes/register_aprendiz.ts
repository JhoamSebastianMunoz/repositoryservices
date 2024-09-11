import express from 'express';
import registerAprendizController from '../controllers/register-aprendiz-controller';
import RegisterValidatorAprendiz from '../middleware/RegisterValidatorAprendiz';

const router = express.Router();


router.post('/', RegisterValidatorAprendiz.validatorParams, RegisterValidatorAprendiz.validator, registerAprendizController);


export default router;
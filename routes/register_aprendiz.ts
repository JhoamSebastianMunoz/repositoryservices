import express from 'express';
import registerAprendizController from '../controllers/register-aprendiz-controller';
import RegisterValidatorAprendiz from '../middleware/RegisterValidatorAprendiz';
import verifyToken from '../middleware/VerifyToken';

const router = express.Router();


router.post('/',verifyToken, RegisterValidatorAprendiz.validatorParams, RegisterValidatorAprendiz.validator, registerAprendizController);


export default router;
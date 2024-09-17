import express from 'express';
import getAprendizController from '../controllers/get-aprendiz-controller';
import getAprendizValidator from '../middleware/GetAprendizValidator'
import verifyToken from '../middleware/VerifyToken';

const router = express.Router();


router.get('/',verifyToken, getAprendizValidator.validatorParams,getAprendizValidator.validator,getAprendizController);


export default router;
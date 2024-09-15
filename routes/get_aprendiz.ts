import express from 'express';
import getAprendizController from '../controllers/get-aprendiz-controller';
import getAprendizValidator from '../middleware/GetAprendizValidator'

const router = express.Router();


router.get('/',getAprendizValidator.validatorParams,getAprendizValidator.validator,getAprendizController);


export default router;
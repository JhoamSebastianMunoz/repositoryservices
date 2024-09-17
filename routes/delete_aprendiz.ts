import express from 'express';
import deleteAprendizValidator from '../middleware/DeleteAprendizValidator';
import deleteAprendizController from '../controllers/delete-aprendiz-controller';
import verifyToken from '../middleware/VerifyToken';


const router = express.Router();


router.delete('/',verifyToken,deleteAprendizValidator.validatorParams, deleteAprendizValidator.validator,deleteAprendizController);


export default router;
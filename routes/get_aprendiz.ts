import express from 'express';
import getAprendizController from '../controllers/get-aprendiz-controller';


const router = express.Router();


router.get('/',getAprendizController);


export default router;
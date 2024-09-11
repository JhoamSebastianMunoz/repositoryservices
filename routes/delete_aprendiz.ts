import express from 'express';
import deleteAprendizController from '../controllers/delete-aprendiz-controller';


const router = express.Router();


router.delete('/',deleteAprendizController);


export default router;
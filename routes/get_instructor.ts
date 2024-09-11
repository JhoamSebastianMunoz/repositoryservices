import express from 'express';
import getInstructorController from '../controllers/get-instructor-controller';


const router = express.Router();


router.get('/',getInstructorController);


export default router;
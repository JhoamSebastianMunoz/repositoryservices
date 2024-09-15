import express from "express";
import bodyParser from 'body-parser';

import register from './routes/register';
import get_instructor from './routes/get_instructor';
import delete_instructor from './routes/delete_instructor';
import update_instructor from './routes/update_instructor';
import auth from './routes/auth';
import register_aprendiz from './routes/register_aprendiz'
import get_aprendiz from './routes/get_aprendiz';
import delete_aprendiz from './routes/delete_aprendiz';
import update_aprendiz from './routes//update_aprendiz'
import profile from './routes/profile';
import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/register-instructor', register);
app.use('/get-instructor', get_instructor);
app.use('/delete-instructor', delete_instructor);
app.use('/update-instructor', update_instructor)
app.use('/auth', auth);
app.use('/register-aprendiz',register_aprendiz);
app.use('/get-aprendiz',get_aprendiz);
app.use('/delete-aprendiz',delete_aprendiz);
app.use('/update-aprendiz', update_aprendiz);
app.use('/profile', profile);


const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

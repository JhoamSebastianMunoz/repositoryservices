import { Request, Response } from "express";
import DeleteUser from "../Dto/DeleteUserDto";
import UserService from '../services/UserServices';




let delete_instructor = async (req: Request, res: Response) => {  
    try {
        const {
            email,
            contraseña
        } = req.body;
        const registerUser = await UserService.deleteInstructor(new DeleteUser(email,contraseña))
        
        return res.status(201).json({
            message: 'Instructor eliminado con exito',
        });
        } catch (error: any) {    
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
        }
    }

    export default delete_instructor;
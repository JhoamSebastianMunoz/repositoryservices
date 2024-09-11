import { Request, Response } from "express";
import GetUser from "../Dto/GetUserDto";
import UserService from '../services/UserServices';




let get_instructor = async (req: Request, res: Response) => {  
    try {
        const {
            email,
            contraseña
        } = req.body;
        const registerUser = await UserService.getInstructor(new GetUser(email,contraseña))
        
        return res.status(201).json(registerUser);
        } catch (error: any) {    
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
        }
    }

    export default get_instructor;
import { Request, Response } from "express";
import GetAprendiz from "../Dto/GetAprendizDto";
import UserService from '../services/UserServices';




let get_aprendiz = async (req: Request, res: Response) => {  
    try {
        const {
            cc,
            ficha
        } = req.body;
        const registerUser = await UserService.getAprendiz(new GetAprendiz(cc,ficha))
        
        return res.status(201).json(registerUser);
        } catch (error: any) {    
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
        }
    }

    export default get_aprendiz;
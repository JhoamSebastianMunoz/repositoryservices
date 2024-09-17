import { Request, Response } from "express";
import UserService from '../services/UserServices';
import DeleteAprendiz from "../Dto/DeleteAprendizDto";
import AprendizService from "../services/AprendizService";



let delete_aprendiz = async (req: Request, res: Response) => {  
    try {
        const {
            cc,
            ficha,
            primer_nombre
        } = req.body;
        const registerUser = await AprendizService.deleteAprendiz(new DeleteAprendiz(cc,ficha,primer_nombre))
        
        return res.status(201).json({
            message: 'Aprendiz eliminado con éxito',
        });
        } catch (error: any) {    
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
        }
    }

    export default delete_aprendiz;
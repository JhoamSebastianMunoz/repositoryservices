import { Request, Response } from "express";
import Aprendiz from '../Dto/AprendizDto';
import AprendizService from "../services/AprendizService";


let register_aprendiz = async (req: Request, res: Response) => {  
    try {
        const {
        cc,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        telefono,
        ficha,
        id
        } = req.body;
        const registerUser = await AprendizService.registerAprendiz(new Aprendiz(cc, primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,telefono,ficha,id))
        
        return res.status(201).json(
        { status: 'Ok, registered the Aprendiz'}
        );
    } catch (error: any) {    
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    }
    }
    export default register_aprendiz;
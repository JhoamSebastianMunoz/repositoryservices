import {Request, Response} from 'express';
import Aprendiz from '../Dto/AprendizDto';
import UserService from '../services/UserServices';

let update_aprendiz = async(req:Request, res:Response)=>{
    try {
        const {
            cc,
            primer_nombre,
            segundo_nombre,
            primer_apellido,
            segundo_apellido,
            telefono,
            ficha,
            id_instructor
            } = req.body;
            const update = await UserService.updateAprendiz(new Aprendiz(cc,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,telefono,ficha,id_instructor))
            return res.status(200).json(
                {status:'ok, updated the Aprendiz'}
            );
        }catch(error:any){
            if(error && error.code == "ER_DUP_ENTRY"){
                return res.status(500).json({errorInfo: error.sqlMessage})
            }else{
                return res.status(500).json({error: "Internal Server Error", details: error.message })
            }
        }
}
export default update_aprendiz;
import { Request, Response } from "express";
import User from '../Dto/UserDto';
import UserService from '../services/UserServices';


let register = async (req: Request, res: Response) => {  
  try {
    const {
      cc,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      email,
      contraseña
    } = req.body;
    const registerUser = await UserService.register(new User(cc, primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,email,contraseña))
    
    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {    
    if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage });
    } else {
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  }
}


export default register;
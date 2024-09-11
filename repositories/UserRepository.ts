import db from '../config/config-db';
import User from '../Dto/UserDto';
import GetUser from '../Dto/GetUserDto';
import DeleteUser from '../Dto/DeleteUserDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';
import Aprendiz from '../Dto/AprendizDto';
import GetAprendiz from '../Dto/GetAprendizDto';
import DeleteAprendiz from '../Dto/DeleteAprendizDto';


class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO directores_de_grupo (cc, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido,email,contraseña) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [user.cc, user.primer_nombre, user.segundo_nombre, user.primer_apellido, user.segundo_apellido,user.email,user.contraseña];        
        return db.execute(sql, values);
    }
    static async get(getUser : GetUser){
      const sql = 'SELECT cc, primer_nombre,segundo_nombre, primer_apellido, segundo_apellido, email FROM directores_de_grupo WHERE email= ? AND contraseña= ?';
      const values = [getUser.email,getUser.contraseña];        
      return db.execute(sql, values);
  }
    static async delete(deleteUser:DeleteUser){
      const sql = 'DELETE FROM directores_de_grupo WHERE email= ? AND contraseña= ?';
      const values =[deleteUser.email, deleteUser.contraseña]
      return db.execute(sql,values);
    }
    static async update(updateUser: User){
      const sql = 'UPDATE directores_de_grupo SET primer_nombre=?, segundo_nombre=?, primer_apellido=?, segundo_apellido=?, email=?, contraseña=? WHERE cc=?'
      const values =[updateUser.primer_nombre,updateUser.segundo_nombre,updateUser.primer_apellido,updateUser.segundo_apellido,updateUser.email,updateUser.contraseña,updateUser.cc]
      return db.execute(sql,values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT * FROM directores_de_grupo WHERE email=?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.contraseña, result[0][0].contraseña);
          if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: result[0][0].id}
          }
          return {logged: false, status: "Invalid credentials" };
        }
        return {logged: false, status: "Invalid credentials" };
    }

    static async added(aprendiz: Aprendiz){
      const sql = 'INSERT INTO aprendices (cc, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, telefono, ficha, id_instructor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
      const values = [aprendiz.cc, aprendiz.primer_nombre, aprendiz.segundo_nombre, aprendiz.primer_apellido, aprendiz.segundo_apellido,aprendiz.telefono,aprendiz.ficha,aprendiz.id_instructor];        
      return db.execute(sql, values);
    }
    static async getAprendiz(getAprendiz : GetAprendiz){
      const sql = 'SELECT * FROM aprendices WHERE cc= ? AND ficha= ?';
      const values = [getAprendiz.cc,getAprendiz.ficha];        
      return db.execute(sql, values);
  }
    static async deleteAprendiz(deleteAprendiz : DeleteAprendiz){
      const sql = 'DELETE FROM aprendices WHERE cc= ? AND ficha= ? AND primer_nombre =?';
      const values = [deleteAprendiz.cc,deleteAprendiz.ficha, deleteAprendiz.primer_nombre];        
      return db.execute(sql, values);
  }
    static async updateAprendiz(aprendiz: Aprendiz){
      const sql = 'UPDATE aprendices SET primer_nombre=?, segundo_nombre=?, primer_apellido=?, segundo_apellido=?, telefono=?, ficha=?, id_instructor=? WHERE cc=?';
  const values = [aprendiz.primer_nombre, aprendiz.segundo_nombre, aprendiz.primer_apellido, aprendiz.segundo_apellido,aprendiz.telefono,aprendiz.ficha,aprendiz.id_instructor,aprendiz.cc];        
      return db.execute(sql, values);
    }
}


export default UserRepository;
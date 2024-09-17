import db from '../config/config-db';
import Aprendiz from '../Dto/AprendizDto';
import GetAprendiz from '../Dto/GetAprendizDto';
import DeleteAprendiz from '../Dto/DeleteAprendizDto';


class AprendizRepository {

    static async added(aprendiz: Aprendiz){
        const sql = 'INSERT INTO aprendices (cc, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, telefono, ficha, id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [aprendiz.cc, aprendiz.primer_nombre, aprendiz.segundo_nombre, aprendiz.primer_apellido, aprendiz.segundo_apellido,aprendiz.telefono,aprendiz.ficha,aprendiz.id];        
        return db.execute(sql, values);
    }
    static async getAprendiz(getAprendiz : GetAprendiz){
      const sql = 'SELECT * FROM aprendices WHERE cc= ? AND ficha= ?';
        const values = [getAprendiz.cc,getAprendiz.ficha];  
        const [rows]= await db.execute(sql, values);  
        return [rows]
    }
    static async deleteAprendiz(deleteAprendiz : DeleteAprendiz){
        const sql = 'DELETE FROM aprendices WHERE cc= ? AND ficha= ? AND primer_nombre =?';
        const values = [deleteAprendiz.cc,deleteAprendiz.ficha, deleteAprendiz.primer_nombre];        
        return db.execute(sql, values);
    }
    static async updateAprendiz(aprendiz: Aprendiz){
        const sql = 'UPDATE aprendices SET primer_nombre=?, segundo_nombre=?, primer_apellido=?, segundo_apellido=?, telefono=?, ficha=?, id=? WHERE cc=?';
        const values = [aprendiz.primer_nombre, aprendiz.segundo_nombre, aprendiz.primer_apellido, aprendiz.segundo_apellido,aprendiz.telefono,aprendiz.ficha,aprendiz.id,aprendiz.cc];        
        return db.execute(sql, values);
    }
}


export default AprendizRepository;
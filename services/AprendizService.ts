import Aprendiz from '../Dto/AprendizDto';
import GetAprendiz from '../Dto/GetAprendizDto';
import DeleteAprendiz from '../Dto/DeleteAprendizDto';
import AprendizRepository from '../repositories/AprendizRepository';



class AprendizService {
    
    
    static async registerAprendiz(aprendiz: Aprendiz){
        return await AprendizRepository.added(aprendiz);
    }
    static async getAprendiz(getAprendiz : GetAprendiz){
        return await AprendizRepository.getAprendiz(getAprendiz);
    }
    static async deleteAprendiz(deleteAprendiz : DeleteAprendiz){
        return await AprendizRepository.deleteAprendiz(deleteAprendiz);
    }
    static async updateAprendiz(aprendiz: Aprendiz){
        return await AprendizRepository.updateAprendiz(aprendiz);
    }
}

export default AprendizService;
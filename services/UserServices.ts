import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import GetUser from '../Dto/GetUserDto';
import DeleteUser from '../Dto/DeleteUserDto';
import generateHash from '../Helpers/generateHash';
import Auth from '../Dto/AuthDto';
import Aprendiz from '../Dto/AprendizDto';
import GetAprendiz from '../Dto/GetAprendizDto';
import DeleteAprendiz from '../Dto/DeleteAprendizDto';



class UserService {
    
    static async register(user: User) {
        user.contraseña = await generateHash(user.contraseña);
        return await UserRepository.add(user);
    }
    static async getInstructor(getUser : GetUser){
        return await UserRepository.get(getUser);
    }
    static async deleteInstructor(deleteUser : DeleteUser){
        return await UserRepository.delete(deleteUser);
    }
    static async updateInstructor(UpdateUser :User){
        UpdateUser.contraseña = await generateHash(UpdateUser.contraseña);
        return await UserRepository.update(UpdateUser);
    }

    static async login(auth: Auth) {
        return await UserRepository.login(auth);
    }
    
    static async registerAprendiz(aprendiz: Aprendiz){
        return await UserRepository.added(aprendiz);
    }
    static async getAprendiz(getAprendiz : GetAprendiz){
        return await UserRepository.getAprendiz(getAprendiz);
    }
    static async deleteAprendiz(deleteAprendiz : DeleteAprendiz){
        return await UserRepository.deleteAprendiz(deleteAprendiz);
    }
    static async updateAprendiz(aprendiz: Aprendiz){
        return await UserRepository.updateAprendiz(aprendiz);
    }
}

export default UserService;
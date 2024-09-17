import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import GetUser from '../Dto/GetUserDto';
import DeleteUser from '../Dto/DeleteUserDto';
import generateHash from '../Helpers/generateHash';
import Auth from '../Dto/AuthDto';




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
    
}

export default UserService;
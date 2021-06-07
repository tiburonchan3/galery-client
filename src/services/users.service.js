import {API_HOST} from '../utils/constant'
import { TokenService } from './token.service';

export class UsersService extends TokenService{
    async getUsers(page){
        const response = await fetch(`${API_HOST}/user/best-client?pagina=${page}`,{
            headers:{token:`Bearer:${this.getToken()}`}
        })
        return response.json()
    }
}
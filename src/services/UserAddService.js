import axios from "axios";
export default class UserService {
 
    getUserAdd(){
        return axios.get("http://localhost:8080/api/users/add")
    }

}

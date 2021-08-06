import axios from "axios";
export default class GrantorTypeService {
 
    getGrantorType(){
        return axios.get("http://localhost:8080/api/grantorTypes/getAll")
    }
    getUserById(id){
        return axios.get("http://localhost:8080/api/users/getById?id="+id)
    }
}

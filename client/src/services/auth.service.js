import axios from "axios";

const apiURL = "http://localhost:3000/api/user";

class AuthService{
    register(username,email,password,role) {
        return axios.post(apiURL + "/register", {
            name:username,
            email,
            password,
            role
        });
    }
}

export default new AuthService();
import axios from "axios";

const apiURL = "https://my-online-course-backend.onrender.com/api/user";

class AuthService{
    register(username,email,password,role) {
        return axios.post(apiURL + "/register", {
            name:username,
            email,
            password,
            role
        });
    }
    login(email, password) {
        return axios.post(apiURL + "/login", {
            email,
            password
        })
    }
    logout() {
        localStorage.removeItem("user");
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();
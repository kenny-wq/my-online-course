import axios from "axios";

const apiURL = "http://localhost:8000/api/course";

class CourseService{
    searchCourse(courseName) {
        let token;
        if (localStorage.getItem("user")) {
          token = JSON.parse(localStorage.getItem("user")).token;
        } else {
          token = "";
        }
        return axios.get(apiURL + "/search_course/" + courseName, {
          headers: {
            Authorization: token,
          },
        });
    }
};

export default new CourseService();
import axios from "axios";

const apiURL = "https://my-online-course-backend.onrender.com/api/course";

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
    enrollCourse(courseId) {
        let token;
        if (localStorage.getItem("user")) {
          token = JSON.parse(localStorage.getItem("user")).token;
        } else {
          token = "";
        }
        return axios.post(apiURL + "/enroll_course/" + courseId,{},{
          headers: {
            Authorization: token,
          },
        });
    }
    studentCourse(studentId) {
      let token;
      if (localStorage.getItem("user")) {
        token = JSON.parse(localStorage.getItem("user")).token;
      } else {
        token = "";
      }
        
      return axios.get(apiURL + "/student_course/" + studentId, {
        headers: {
          Authorization: token,
        },
      });
    }
    instructorCourse(instructorId) {
      let token;
      if (localStorage.getItem("user")) {
        token = JSON.parse(localStorage.getItem("user")).token;
      } else {
        token = "";
      }

      return axios.get(apiURL + "/instructor_course/" + instructorId, {
        headers: {
          Authorization: token,
        },
      });
    }
    addCourse(title, description, price) {
      let token;
      if (localStorage.getItem("user")) {
        token = JSON.parse(localStorage.getItem("user")).token;
      } else {
        token = "";
      }

      return axios.post(
        apiURL + "/add_course",
        { title, description, price },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    }
};

export default new CourseService();
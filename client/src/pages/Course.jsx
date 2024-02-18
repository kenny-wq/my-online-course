import React, { useContext, useEffect, useState } from 'react'
import CourseService from '../services/Course.service';
import UserContext from '../contexts/UserContext';

const Course = () => {
  const { currentUser } = useContext(UserContext);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let results;
      if (currentUser.user.role === "student") {
        results = await CourseService.studentCourse(currentUser.user._id);
      }
      else if (currentUser.user.role === "instructor") {
        results = await CourseService.instructorCourse(currentUser.user._id);
      }
      setCourses(results.data.foundCourses);
    }
    fetchData();
  }, []);
  
  let title;
  if (currentUser.user.role === "student") {
    title = <h3 className="m-3">歡迎來到學生的課程頁面</h3>;
  }
  else if (currentUser.user.role === "instructor") {
    title = <h3 className="m-3">歡迎來到講師的課程頁面</h3>;
  }
  
  return (
    <>
      {title}
      {courses &&
        courses.map((course, idx) => {
          if (currentUser.user.role === "student") {
            return (
              <div className="card m-3" key={idx} style={{ width: "18rem" }}>
                <div className="card-body">
                  <p className="card-text">課程名稱:{course.title}</p>
                  <p className="card-text">{course.description}</p>
                  <p className="card-text">講師:{course.instructor.name}</p>
                  <p className="card-text">價格:{course.price}</p>
                </div>
              </div>
            );
          } else if (currentUser.user.role === "instructor") {
            return (
              <div className="card m-3" key={idx} style={{ width: "18rem" }}>
                <div className="card-body">
                  <p className="card-text">課程名稱:{course.title}</p>
                  <p className="card-text">{course.description}</p>
                  <p className="card-text">學生人數:{course.students.length}</p>
                  <p className="card-text">價格:{course.price}</p>
                </div>
              </div>
            );
          }
        })}
    </>
  );
}

export default Course
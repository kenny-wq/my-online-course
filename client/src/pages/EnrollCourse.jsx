import React, { useState } from 'react'
import CourseService from '../services/course.service';
import { useNavigate } from 'react-router-dom';

const EnrollCourse = () => {
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  function handleSearchWordChange(e) {
    setSearchWord(e.target.value);
  }
  async function handleSearchButtonClick() {
    let result = await CourseService.searchCourse(searchWord);
    setSearchResult([result.data.foundCourse]);
  }
  async function handleEnrollButtonClick(courseId) {
    let result = await CourseService.enrollCourse(courseId);
    if (result.data.msg === "user already enroll") {
      window.alert("課程已經註冊過");
    }
    else if (result.data.msg === "course enroll successfully") {
      window.alert("課程已經註冊，現在導向至課程頁面");
      navigate("/course");
    } 
  }
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchWordChange}/>
          <button className="btn btn-outline-success" onClick={handleSearchButtonClick}>Search</button>
        </div>
      </div>
      {searchResult && searchResult.map((course, idx) => {
        return <div className="card m-3" key={idx} style={{width: "18rem"}}>
                <div className="card-body">
                  <p className='card-text'>課程名稱:{course.title}</p>
                  <p className='card-text'>{course.description}</p>
                  <p className='card-text'>價格:{course.price}</p>
                  <p className='card-text'>講師:{course.instructor.name}</p>
                  <p className='card-text'>目前學生人數:{course.students.length}</p>
                  <button className='btn btn-primary' onClick={()=>handleEnrollButtonClick(course._id)}>註冊課程</button>
                </div>
              </div>
      })}
    </>
    
  )
}

export default EnrollCourse
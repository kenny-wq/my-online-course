import React, { useState } from 'react'
import CourseService from '../services/course.service';

const EnrollCourse = () => {
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function handleSearchWordChange(e) {
    setSearchWord(e.target.value);
  }
  async function handleButtonClick() {
    let result = await CourseService.searchCourse(searchWord);
    setSearchResult([...searchResult, result.data.foundCourse]);
  }
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchWordChange}/>
          <button className="btn btn-outline-success" onClick={handleButtonClick}>Search</button>
        </div>
      </div>
      {searchResult && searchResult.map((course, idx) => {
        console.log(course.instructor.name);
        return <div className="card m-3" key={idx} style={{width: "18rem"}}>
                <div className="card-body">
                  <p className='card-text'>課程名稱:{course.title}</p>
                  <p className='card-text'>{course.description}</p>
                  <p className='card-text'>價格:{course.price}</p>
                  <p className='card-text'>講師:{course.instructor.name}</p>
                  <p className='card-text'>目前學生人數:{course.students.length}</p>
                  <button className='btn btn-primary'>註冊課程</button>
                </div>
              </div>
      })}
    </>
    
  )
}

export default EnrollCourse
import React, { useState } from 'react'
import CourseService from '../services/course.service';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const [courseName, setCourseName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  function handleCourseNameChange(e) {
    setCourseName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }
  async function handleButtonClick() {
    try {
      await CourseService.addCourse(courseName, description, price);
      window.alert("課程已新增，現在導向至課程頁面");
      navigate("/course");
    } catch (e) {
      setErr(e.response.data.error);
    }
  }
  return (
    <div className="m-3">
      <div className="mb-3">
        <label htmlFor="course_name" className="form-label">
          課程名稱:
        </label>
        <input
          type="text"
          className="form-control"
          id="course_name"
          aria-describedby="emailHelp"
          onChange={handleCourseNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          簡介:
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          價格:
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          onChange={handlePriceChange}
        />
      </div>
      {err && <div className="alert alert-danger">{err}</div>}
      <button className="btn btn-primary" onClick={handleButtonClick}>Submit</button>
    </div>
  );
}

export default AddCourse
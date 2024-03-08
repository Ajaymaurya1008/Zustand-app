/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useCousrseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCousrseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState("");

  const handleSubmit = () => {
    if (!courseTitle) alert("please add course");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
      />
      <button className="form-submit-btn" onClick={handleSubmit}>
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;

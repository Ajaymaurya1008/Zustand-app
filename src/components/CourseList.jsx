/* eslint-disable no-unused-vars */
import React from "react";
import useCousrseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCousrseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <ul>
      {courses.map((course, i) => {
        return (
          <li
            className={`course-item`}
            style={{
              backgroudColor: course.completed ? "#00FF0044" : "white",
            }}
            key={i}
          >
            <span>
              <input
                checked={course.completed || false}
                type="checkbox"
                onChange={(e) => toggleCourseStatus(course.id)}
              />
            </span>
            <span>{course.title}</span>
            <button onClick={() => removeCourse(course.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseList;

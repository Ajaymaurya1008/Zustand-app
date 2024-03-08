/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {create} from "zustand";
import { devtools, persist } from "zustand/middleware";

const cousrseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

const useCousrseStore = create(
  devtools(
    persist(cousrseStore, {
      name: "courses",
    })
  )
);

export default useCousrseStore;

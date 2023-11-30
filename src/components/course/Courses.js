import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  coursesActions,
  coursesSelector,
} from "../../redux/reducers/coursesReducer";
import CourseCard from "./CourseCard";
import course from "./Courses.module.css";

function Courses() {
  const courses = useSelector(coursesSelector);

  const dispatch = useDispatch();

  //fetching get data from node server
  useEffect(() => {
    const url = "http://localhost:3100/api/course";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(coursesActions.get(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={course.coursesContainer}>
      {courses.map((course, index) => (
        <CourseCard course={course} key={index} i={index} />
      ))}
    </div>
  );
}

export default Courses;

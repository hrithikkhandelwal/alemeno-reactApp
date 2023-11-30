import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userCoursesActions,
  userCoursesSelector,
} from "../../redux/reducers/userCoursesReducer";
import { userSelector } from "../../redux/reducers/userReducer";
import UserCourseCard from "./userCourseCard";
import userCoursesCss from "./userCourses.module.css";

export default function UserCourses() {
  const courses = useSelector(userCoursesSelector);

  const dispatch = useDispatch();

  const user = useSelector(userSelector);

  useEffect(() => {
    const url = `http://localhost:3100/api/course/${user.id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(userCoursesActions.get(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={userCoursesCss.coursesContainer}>
        {courses.map((course, i) => (
          <UserCourseCard course={course} key={i} />
        ))}
      </div>
    </div>
  );
}

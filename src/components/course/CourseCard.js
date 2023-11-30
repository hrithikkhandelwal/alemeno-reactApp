import { courseIdActions } from "../../redux/reducers/courseId";
import { coursesActions } from "../../redux/reducers/coursesReducer";
import { useDispatch, useSelector } from "react-redux";
import courseCard from "./CourseCard.module.css";
import { Link } from "react-router-dom";
import { userSelector } from "../../redux/reducers/userReducer";

function CourseCard({ course, i }) {
  const dispatch = useDispatch();

  function getDetails(e) {
    dispatch(courseIdActions.get(course.id));
  }

  const user = useSelector(userSelector);

  function doLike(e) {
    e.preventDefault();
    const url = `http://localhost:3100/api/course/likes/${course.id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(coursesActions.get(data)))
      .catch((err) => console.log(err));
  }

  return (
    <div className={courseCard.card}>
      <div id={course.id}>
        <h4>
          {course.name} by {course.instructor} -
          <i> Enrollment : {course.enrollmentStatus}</i>
        </h4>
        <p> Description : {course.description}</p>
      </div>
      <div>
        <p>Likes : {course.likes}</p>
        {user && user.id ? (
          <div>
            <Link
              to="#"
              onClick={doLike}
              className={courseCard.courseDetailLink}
            >
              Click here to Increase Likes
            </Link>
            <br />
            <br />
          </div>
        ) : (
          <></>
        )}

        <Link
          to="/coursedetails"
          onClick={getDetails}
          className={courseCard.courseDetailLink}
        >
          Click here to Get details
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;

import { useSelector } from "react-redux";
import { coursesSelector } from "../../redux/reducers/coursesReducer";
import { courseIdSelector } from "../../redux/reducers/courseId";
import detailCss from "./CourseDetails.module.css";

function CourseDetails() {
  const Id = useSelector(courseIdSelector);

  const courseSelector = useSelector(coursesSelector);
  const getCourse = courseSelector.filter((c) => c.id === Id);
  const course = getCourse[0];

  return (
    <div className={detailCss.card}>
      <h4>
        {course.name} by {course.instructor} -
        <i> Enrollment : {course.enrollmentStatus}</i>
      </h4>
      <p>Likes : {course.likes}</p>
      <p> Description : {course.description}</p>
      <p>
        Location : {course.location} , Duration : {course.duration} -{" "}
        {course.schedule}
      </p>
      <p>Pre-Requisites : {course.prerequisites.join(" , ")}</p>
      {course.syllabus.map((s, i) => (
        <div key={i}>
          <span>
            Week : {s.week} , Topic : {s.topic} , Content : {s.content}
          </span>
          <br />
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;

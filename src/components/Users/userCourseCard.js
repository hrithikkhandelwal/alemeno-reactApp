import userCourseCardCss from "./userCourseCard.module.css";

export default function UserCourseCard({ course }) {
  return (
    <div className={userCourseCardCss.card}>
      <h4>
        {course.name} by {course.instructor}
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
            {" "}
            Week : {s.week} , Topic : {s.topic} , Content : {s.content}
          </span>
          <br />
        </div>
      ))}
    </div>
  );
}

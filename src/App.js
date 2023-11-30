import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Courses from "./components/course/Courses";
import CourseDetails from "./components/course/CourseDetails";
import Login from "./components/Users/Login";
import Nav from "./Nav";
import UserCourses from "./components/Users/UserCourses";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Nav />,
      children: [
        { index: true, element: <Login /> },
        { path: "courses", element: <Courses /> },
        { path: "coursedetails", element: <CourseDetails /> },
        { path: "usercourses", element: <UserCourses /> },
      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<Courses />} />
      </Provider>
    </div>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Register,
  Login,
  Landing,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin

} from "./pages";


export const chechDefaulttheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme;
}
chechDefaulttheme();

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        exact: true,
        element: <Register />,
        //component: () => <h2>Home</h2>
      },
      {
        path: "login",
        exact: true,
        element: <Login />,
        //component: () => <h2>Home</h2>
      },

      {
        path: "dashboard",
        exact: true,
        element: <DashboardLayout />,
        children : [
          {
            index: true,
            element : <AddJob/>
          }, 
          {
            path: "stats",
            element : <Stats/>
          },
          {
            path: "all-jobs",
            element : <AllJobs/>
          },
          {
            path: "profile",
            element : <Profile/>
          }, 
          {
            path: "admin",
            element : <Admin/>
          }
        ]
        //component: () => <h2>Home</h2>
      },
    ],
    //component: () => <h2>Home</h2>
  },

  // Add more routes as needed...
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

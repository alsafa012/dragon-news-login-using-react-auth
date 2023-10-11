import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/HomePage/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import NewsPage from "../Pages/NewsPage/NewsPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch("/news.json"),
               },
               {
                    path: "/news/:id",
                    element: (
                         <PrivateRoute>
                              <NewsPage></NewsPage>
                         </PrivateRoute>
                    ),
                    loader:() => fetch("/news.json"),
               },
               {
                    path: "/register",
                    element: <Register></Register>,
               },
               {
                    path: "/login",
                    element: <Login></Login>,
               },
          ],
     },
]);
export default router;

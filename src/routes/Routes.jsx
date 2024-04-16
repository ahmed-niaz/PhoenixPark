import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import Category from "../pages/Category";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            element: <Home/>,
            loader: ()=> fetch('estate.json'),
        },
        {
          path:'/category',
          element: <Category/>,
          loader: ()=> fetch ('category.json'),
        },
        {
          path: '/estate/:id',
          element: <Details/>,
          loader: ()=> fetch('estate.json'),
        }
       
      ]
    },
  ]);
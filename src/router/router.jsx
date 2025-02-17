import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Career from "../Pages/Career/Career";
import AboutUs from "../Pages/AboutUs/AboutUs";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
          
          {path:'/',element:<Home/>},
          {path:'/services',element:<Services/>},
          {path:'/career',element:<Career/>},
          {path:'/about',element:<AboutUs/>},
      ]
    },
  ]);
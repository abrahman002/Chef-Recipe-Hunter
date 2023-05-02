import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Page/Home/Home/Home';
import About from '../Page/Contact/Contact';
import Contact from "../Page/Contact/Contact";
import Blog from '../Page/Blog/Blog';


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        }
        ,
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }

      ]
    },
  ]);
  
export default router;
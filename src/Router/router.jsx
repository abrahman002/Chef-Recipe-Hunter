import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Page/Home/Home/Home';
import About from '../Page/Contact/Contact';
import Contact from "../Page/Contact/Contact";
import Blog from '../Page/Blog/Blog';
import Login from "../LoginLayout/Login/Login";
import Register from "../LoginLayout/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:({params})=>fetch('http://localhost:4000/recipe')
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
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }

      ]
    },
  ]);
  
export default router;
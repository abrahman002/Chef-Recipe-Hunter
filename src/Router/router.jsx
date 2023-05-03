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
import Work from "../Page/Home/Work/Work";
import Recipe from '../Page/Recipe/Recipe.jsx';
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import ErorPage from "../Page/ErrorPage/ErorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErorPage></ErorPage>,
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
        },
        {
          path:'/work',
          element:<Work></Work>
        },
        {
          path:'/recipe/:id',
          element:<PrivetRouter><Recipe></Recipe></PrivetRouter>,
          loader:({params})=>fetch(`http://localhost:4000/recipe/${params.id}`)
        }

      ]
    },
  ]);
  
export default router;
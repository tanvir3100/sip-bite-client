import { createBrowserRouter } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Recipes from "../Pages/Recipes/Recipes";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";






const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/recipes',
                element: <Recipes />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
]);

export default Router







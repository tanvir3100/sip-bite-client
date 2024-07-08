import { createBrowserRouter } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Recipes from "../Pages/Recipes/Recipes";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Classic from "../Pages/Burgers/classic";
import Spicy from "../Pages/Burgers/Spicy";
import Bbq from "../Pages/Burgers/Bbq";
import Veggie from "../Pages/Burgers/Veggie";
import Margherita from "../Pages/Pizzas/Margherita";
import Pepperoni from "../Pages/Pizzas/Pepperoni";
import Chicken from "../Pages/Pizzas/Chicken";
import Supreme from "../Pages/Pizzas/Supreme";
import Latte from "../Pages/Drinks/Latte";
import Cappuccino from "../Pages/Drinks/Cappuccino";
import Caramel from "../Pages/Drinks/Caramel";
import Mocha from "../Pages/Drinks/Mocha";






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
                path: '/recipes',
                element: <Recipes />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: 'menu',
                element: <Menu />,
                children: [
                    {
                        path: 'classic',
                        element: <Classic />
                    },
                    {
                        path: 'spicy',
                        element: <Spicy />
                    },
                    {
                        path: 'bbq',
                        element: <Bbq />
                    },
                    {
                        path: 'veggie',
                        element: <Veggie />
                    },
                    {
                        path: 'margherita',
                        element: <Margherita />
                    },
                    {
                        path: 'pepperoni',
                        element: <Pepperoni />
                    },
                    {
                        path: 'chicken',
                        element: <Chicken />
                    },
                    {
                        path: 'supreme',
                        element: <Supreme />
                    },
                    {
                        path: 'cappuccino',
                        element: <Cappuccino />
                    },
                    {
                        path: 'caramel',
                        element: <Caramel />
                    },
                    {
                        path: 'latte',
                        element: <Latte />
                    },
                    {
                        path: 'mocha',
                        element: <Mocha />
                    },

                ]
            }
        ]
    }
]);

export default Router







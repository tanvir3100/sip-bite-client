import EditPopularItem from "../Pages/EditPopularItem/EditPopularItem";
import EditRecipeItem from "../Pages/EditRecipeItem/EditRecipeItem";
import EditChefItem from "../Pages/EditChefItem/EditChefItem";
import ManageItems from "../Pages/MangeItem/ManageItem";
import { createBrowserRouter } from "react-router-dom";
import Margherita from "../Pages/Pizzas/Margherita";
import Cappuccino from "../Pages/Drinks/Cappuccino";
import Pepperoni from "../Pages/Pizzas/Pepperoni";
import EditItem from "../Pages/EditItem/EditItem";
import AdminHome from "../Pages/Admin/AdminHome";
import AddItem from "../Pages/AddItem/AddItem";
import Classic from "../Pages/Burgers/classic";
import Contact from "../Pages/Contact/Contact";
import Recipes from "../Pages/Recipes/Recipes";
import Caramel from "../Pages/Drinks/Caramel";
import MainLayout from "../Layout/MainLayout";
import Chicken from "../Pages/Pizzas/Chicken";
import Supreme from "../Pages/Pizzas/Supreme";
import Veggie from "../Pages/Burgers/Veggie";
import Dashboard from "../Layout/Dashboard";
import Spicy from "../Pages/Burgers/Spicy";
import Latte from "../Pages/Drinks/Latte";
import Mocha from "../Pages/Drinks/Mocha";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivetRoute";
import Bbq from "../Pages/Burgers/Bbq";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Cart from "../Pages/Cart/Cart";
import EditReviewItem from "../Pages/EditReviewItem/EditReviewItem";
import AddChef from "../Pages/AddChef/AddChef";






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
                path: '/cart',
                element: <Cart />
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
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'addItems',
                element: <AddItem />
            },
            {
                path: 'addChefItem',
                element: <AddChef />
            },
            {
                path: 'manageItem',
                element: <ManageItems />
            },
            {
                path: 'adminHome',
                element: <AdminHome />
            },
            {
                path: 'editItem/:id',
                element: <EditItem />,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: 'editPopularItem/:id',
                element: <EditPopularItem />,
                loader: ({ params }) => fetch(`http://localhost:5000/popular/${params.id}`)
            },
            {
                path: 'editChefItem/:id',
                element: <EditChefItem />,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: 'editRecipeItem/:id',
                element: <EditRecipeItem />,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
            },
            {
                path: 'editReviewItem/:id',
                element: <EditReviewItem />,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
        ]
    }
]);

export default Router







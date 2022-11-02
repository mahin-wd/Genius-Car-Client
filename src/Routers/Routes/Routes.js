import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import CheckOut from '../../Pages/CheckOut/CheckOut';
import Error from '../../Pages/Error/Error';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Orders from '../../Pages/Orders/Orders';
import SignUp from '../../Pages/Sign Up/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
            
                element: <Home></Home>
            },
            {
                path: '/checkout/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <CheckOut></CheckOut>
                        
            },
            {
                path: '/orders',
                element: <Orders></Orders>
               
                        
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
]);

export default router;
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth Provider/AuthProvider';

const PrivateRoute = ({childres: children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader) {
        return <p>Loading...</p>
    }
    if(user) {
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
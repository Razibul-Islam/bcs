import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loader/Loading';
import auth from './Firebase.int';





const RequireAuth = ({children}) => {
    const [user, loading,error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
       return <Navigate to="/login" state={{ from: location }}  replace></Navigate>
    }
    
    return children;
};

export default RequireAuth;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loader/Loading';
import auth from './Firebase.int';




const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate()
    const handleUser = () => {
        const url = `http://localhost:5000/get-user-email?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
              if(data.Role !== 'Admin'){
                // navigate('/')
                // console.log(data);
              }
            })
    }
   
    if (loading) {
        return <Loading></Loading>
    }

  

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

   
    handleUser()
    return children;
};

export default RequireAdmin;
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const LoggedOutPrivetRoute = ({children, ...rest}) => {
    const {user, loading} = useAuth();
    if (loading) {
        return <div className="text-center my-12">
        <i className="fas fa-spinner animate-spin text-2xl text-green-600 font-bold"></i>
    </div>
    }
    return (
        <div>
            <Route
             {...rest}
             render={({location}) => 
                 user?.email ? children : <Redirect 
                  to={{
                      pathname: "/login",
                      from: location
                  }}
                 ></Redirect>
             }
            >
            </Route>
        </div>
    );
};

export default LoggedOutPrivetRoute;
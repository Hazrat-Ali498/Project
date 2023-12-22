import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const token = localStorage.getItem('token');
    const email = localStorage.getItem('adminEmail');

  return (
       token && email ? <Outlet/> : <Navigate to="/Login" />
  );
};

export default PrivateRoute;

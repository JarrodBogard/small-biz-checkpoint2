import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import cookie from "cookie";
import AddListing from "./containers/AddListing";
import Listings from "./containers/Listings";
import Login from "./containers/Login";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component } = props;
  return checkAuth ? <Component /> : <Navigate to="/login" />;
};

const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Listings />} />
      {/* <Route path="/" element={<ProtectedRoute component={Listings} />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<AddListing />} />
    </Routes>
  );
};

export default Router;

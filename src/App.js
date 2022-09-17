import React, { useState } from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Map from "./components/Map";
import GeoCodeMap from "./components/GeoCodeMap";
import Navigation from "./containers/Navigation";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

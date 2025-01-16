import React from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from "./components/Footer";
import PropSample from "./samples/PropSample";
import StateSample from "./samples/StateSample";
import CounterSample from "./samples/CounterSample";
import GetDataSample from "./samples/GetDataSample";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Error from "./pages/Error";
import { Provider } from "react-redux";
import store from "./store/store";
import Favorites from "./pages/Favorites";


export default function App() {
  // console.log("Merhaba")

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  )

}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import './index.css';
import Footer from "./Footer";
import Home from "./pages/Home";
import useHomeStore from "./stores/HomeStore";

const { Content } = Layout;

function App() {
  const {
    count: homeCount,
    increment: homeIncrement,
    decrement: homeDecrement,
  } = useHomeStore();

  return (
    <Router>
      <div className="my-0 mx-auto min-h-full max-w-screen-sm">
        <Content className="container my-0 mx-auto min-h-screen max-w-[480px] overflow-x-hidden bg-white pb-[66px]">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  count={homeCount}
                  increment={homeIncrement}
                  decrement={homeDecrement}
                />
              }
            />
           
          </Routes>
          <Footer />
        </Content>
      </div>
    </Router>
  );
}

export default App;

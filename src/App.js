import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import './index.css';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotificationPage from "./pages/Notification";
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
      <div className="my-0 mx-auto min-h-full">
        <Content className="my-0 mx-auto min-h-screen max-w-[480px] overflow-x-hidden bg-white pb-[66px]">
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />

            <Route
              path="/notifications"
              element={
                <NotificationPage />
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

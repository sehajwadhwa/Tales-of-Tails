import React from "react";
import { Routes, Route } from "react-router-dom";
import { PassageProvider } from "@passageidentity/passage-react";

import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Header from "./components/Header";
import styles from "./styles/App.module.css";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import HomeScreen from "./containers/HomeScreen";
import { ControllerTest } from "./components/ControllerTest";

function App() {
  return (
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <div>
        <Header />
        <HomeScreen />
        {/* <div className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/test" element={<ControllerTest/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

          </Routes>
        </div> */}
      </div>
    </PassageProvider>
  );
}

export default App;

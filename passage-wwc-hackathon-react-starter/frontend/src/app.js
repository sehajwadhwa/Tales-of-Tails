import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PassageProvider } from "@passageidentity/passage-react";

import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Header from "./components/Header";
import { Login } from "./components/Login";
import HomeScreen from "./containers/HomeScreen";
import LostAndFoundScreen from "./containers/LostAndFoundScreen";
import Adopt from "./containers/Adopt";
import Footer from "./components/Footer";

function App() {
  return (
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/lost-and-found" element={<LostAndFoundScreen />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </div>
    </PassageProvider>
  );
}

export default App;

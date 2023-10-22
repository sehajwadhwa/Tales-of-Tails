import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PassageProvider } from "@passageidentity/passage-react";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Header from "./components/Header";
import { Login } from "./components/Login";
import LostAndFoundScreen from "./containers/LostAndFoundScreen";
import Adopt from "./containers/Adopt";
import Footer from "./components/Footer";
import HomeScreen from "./containers/HomeScreen";
import { ShelterScreen } from "./containers/ShelterScreen";
import { VolunteerScreen } from "./containers/VolunteerScreen";
import { DonationScreen } from "./containers/DonationScreen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <div>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/lost-and-found" element={<LostAndFoundScreen />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/shelter-screen" element={<ShelterScreen />} />
          <Route path="/volunteer-screen" element={<VolunteerScreen />} />
          <Route path="/donation-screen" element={<DonationScreen />} />
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

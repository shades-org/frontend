import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import {
  CreatePitchPage,
  ErrorPage,
  InvestorLoginPage,
  InvestorPitchPage,
  InvestorPitchesPage,
  PitcherPitchPage,
  PitcherPitchesPage,
  PitcherRegisterPage,
  StaticChatPage,
  UpdatePitchPage,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Pitcher Routes */}
      <Route path="/investor">
        <Route path="login" element={<InvestorLoginPage />} />
        <Route path="pitches" element={<InvestorPitchesPage />} />
        <Route path="pitch/:id" element={<InvestorPitchPage />} />
      </Route>

      {/* Investor Routes */}
      <Route path="/pitcher">
        <Route path="register" element={<PitcherRegisterPage />} />
        <Route path="pitches" element={<PitcherPitchesPage />} />
        <Route path="pitch/:id" element={<PitcherPitchPage />} />
        <Route path="pitch/create" element={<CreatePitchPage />} />
        <Route path="pitch/update/:id" element={<UpdatePitchPage />} />
      </Route>

      <Route path="/chat" element={<StaticChatPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;

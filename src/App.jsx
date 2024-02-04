import React from "react";
import { Route, Routes } from "react-router-dom";
import { PitcherLayout } from "./Layouts";
import {
  CreatePitchPage,
  ErrorPage,
  InvestorLoginPage,
  InvestorPitchPage,
  InvestorPitchesPage,
  LandingPage,
  PitcherPitchPage,
  PitcherPitchesPage,
  PitcherRegisterPage,
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
      <Route path="/pitcher" element={<PitcherLayout />}>
        <Route path="register" element={<PitcherRegisterPage />} />
        <Route path="pitches" element={<PitcherPitchesPage />} />
        <Route path="pitch/:id" element={<PitcherPitchPage />} />
        <Route path="pitch/create" element={<CreatePitchPage />} />
        <Route path="pitch/update/:id" element={<UpdatePitchPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;

import React from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import Layout from "./layout/Layout";
import UserPageDes from "./pages/UserPageDes";


const App = () => {
  return <BrowserRouter>
    <Routes >
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/user" element = {<Layout/>}>
      <Route index element={<UserPage/>} />
      </Route>
      <Route path="/user/description" element={<UserPageDes/>} />
    </Routes>
    </BrowserRouter>
  
};

export default App;

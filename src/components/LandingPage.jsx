import { useAuth } from "@/hooks";
import React from "react";

const LandingPage = () => {
  const { handleGoogleAuth } = useAuth();
  return <button onClick={handleGoogleAuth}>Sign In With Google</button>;
};

export default LandingPage;

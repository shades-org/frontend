import { cacheWrapper } from "@/cache";
import { cachePitcherProfileKey } from "@/constants";
import { auth, GAuthProvider } from "@/firebase";
import { pitcherService } from "@/services";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const pitcherServiceInstance = new pitcherService();
  const cacheWrapperInstance = new cacheWrapper();

  const [googleUser, setGoogleUser] = useState(null);
  const [googleToken, setGoogleToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;

      setGoogleUser(user);
      user.getIdToken().then((token) => {
        setGoogleToken(token);
        setProfile({
          email: user.email,
          profilePic: user.photoURL,
          name: user.displayName,
        });
        handlePitcherRegistrationCheck(token).then(async (res) => {
          if (res) {
            const profile = await pitcherServiceInstance.getProfile(token);
            setProfile(profile.profile);
            navigate("/pitcher/pitches");
          } else {
            navigate("/pitcher/register");
          }
        });
      });
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (googleToken && googleUser) setIsLoading(false);
    console.log(googleToken);
  }, [googleToken, googleUser]);

  const handlePitcherRegistrationCheck = async (token) => {
    try {
      const regCheckRes = await pitcherServiceInstance.checkRegistration(token);
      return true;
    } catch (error) {
      const status = error.response.status;
      const data = error.response.data;

      if (status === 404) {
        return false;
      }
    }
  };

  const handleGoogleAuth = async () => {
    const authRes = await signInWithPopup(auth, GAuthProvider);
    const gToken = await authRes.user.getIdToken();

    setGoogleUser(authRes.user);
    setGoogleToken(() => gToken);

    // Check for Registration
    const res = handlePitcherRegistrationCheck(gToken);
    if (res) {
      const profile = await pitcherServiceInstance.getProfile(gToken);
      setProfile(profile.profile);
      navigate("/pitcher/pitches");
    } else {
      navigate("/pitcher/register");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setGoogleToken(null);
    setGoogleUser(null);
    setProfile(null);
    navigate("/");
  };

  const value = {
    handleGoogleAuth,
    handleLogout,
    isLoading,
    googleUser,
    googleToken,
    profile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

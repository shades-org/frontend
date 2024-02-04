import UserButton from "@/components/UserButton";
import { useAuth } from "@/hooks";
import { pitcherService } from "@/services";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  Button,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { deepOrange } from "@mui/material/colors";
import React, { useState } from "react";

const boxStyle = {
  // position: "absolute",
  height: "75%",
  width: "50%",

  left: "30%",
  top: "10%",
};
const center = {
  position: "absolute",
  top: "5%",
  left: "40%",
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const PitcherRegisterPage = () => {
  const { profile, googleToken } = useAuth();
  const pitcherServiceInstance = new pitcherService();

  const [details, setDetails] = useState({
    name: "",
    PhoneNo: "",
    DOB: "",
    BIO: "",
    AddLink: "",
  });

  const handleChange = (e) => {
    const [name, value] = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataPayload = {};
    console.log(details);
    dataPayload.name = details.name;
    dataPayload.phoneNumber = details["PhoneNo."];
    dataPayload.dob = details["DOB"];
    dataPayload.profilePic = profile.profilePic;
    dataPayload.bio = details["BIO"];
    dataPayload.links = details["AddLink"].split(",").map((link) => {
      return { type: "Link", link: link };
    });

    try {
      const res = await pitcherServiceInstance.register(
        googleToken,
        dataPayload
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(172,0,142,1) 0%, rgba(9,0,92,1) 100%)",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Box sx={boxStyle}>
          <Grid>
            <Box sx={center}>
              <Avatar
                sx={{
                  background: "none",
                  width: "9rem",
                  fontFamily: "bolder",
                  fontSize: "30px",
                }}
                variant="rounded"
              >
                HypePitch{" "}
              </Avatar>
            </Box>
          </Grid>
          <ThemeProvider theme={darkTheme}>
            <Grid container>
              <Grid item sx={{ ml: "3em", mr: "3em", mt: "14em" }}>
                <UserButton data={"Name"} name="name" onChange={handleChange} />
                <UserButton data={"DOB"} name="DOB" onChange={handleChange} />
                <UserButton data={"BIO"} name="BIO" onChange={handleChange} />
                <UserButton
                  data={"Phone No"}
                  name="PhoneNo"
                  onChange={handleChange}
                />
                <Box>
                  <UserButton
                    data={"Additional links"}
                    name="AddLink"
                    placeholder="Enter Links(seperated by commas)"
                    onChange={handleChange}
                  />

                  <Button
                    variant="contained"
                    sx={{ borderRadius: "15px", ml: "45%", mt: "10%" }}
                    onClick={handleSubmit}
                  >
                    Submit{" "}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      </div>
    </>
  );
};

export default PitcherRegisterPage;

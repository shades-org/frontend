import { cacheWrapper } from "@/cache";
import { cachePitcherProfileKey } from "@/constants";
import { useAuth } from "@/hooks";
import { Avatar, Box, Button, CssBaseline, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const { googleUser, googleToken, handleLogout, profile, isLoading } =
    useAuth();

  console.log(profile);
  const cacheWrapperInstance = new cacheWrapper();

  return isLoading ? (
    <></>
  ) : (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          m: 0,
          p: 0,
          bgcolor: "#0092ca",
        }}
      >
        <Box
          sx={{
            display: "flex",
            bgcolor: "#680747",
            width: "96%",
            justifyContent: "space-between",
            alignItems: "center",
            height: "2.3rem",
            borderRadius: "18px",
            mt: "0.4rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "8px" }}>
              <Avatar src={profile.profilePic} sx={{ height: "10%" }} />
            </div>

            <Typography
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1rem",
                fontWeight: "bold",
                marginLeft: "8px",
                color: "white",
              }}
            >
              {profile.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#c3195d",
                height: "28px",
                textTransform: "capitalize",
                fontFamily: "Poppins, sans-serif",
                px: "30px",
                mr: "10px",
              }}
              style={{ backgroundColor: "#c3195d", boxShadow: "0 0 0 0" }}
            >
              Profile
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#c3195d",
                height: "28px",
                textTransform: "capitalize",
                fontFamily: "Poppins, sans-serif",
                px: "30px",
                mr: "13px",
              }}
              style={{ backgroundColor: "#c3195d", boxShadow: "0 0 0 0" }}
              onClick={handleLogout}
            >
              Log
              <span style={{ textTransform: "lowercase", marginLeft: "5px" }}>
                {" "}
                out
              </span>
            </Button>
          </Box>
        </Box>
      </Box>
      <Outlet />
    </>
  );
}

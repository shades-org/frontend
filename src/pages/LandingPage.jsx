import { useAuth } from "@/hooks";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";

export default function LandingPage() {
  const buttonStyle = {
    backgroundColor: "#680747",
    textTransform: "capitalize",
    borderRadius: "20px",
    height: "2.4rem",
    boxShadow: "0 0 0 0",
    marginLeft: "1rem",
    paddingInline: "0.8rem",
  };

  const { handleGoogleAuth } = useAuth();
  return (
    <div>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: "100vw",
          m: 0,
          p: 0,
        }}
        style={{
          background: "rgb(172,0,142)",
          background:
            "linear-gradient(180deg, rgba(172,0,142,1) 0%, rgba(9,0,92,1) 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: "100%",
            mt: "1rem",
          }}
        >
          <div>
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={handleGoogleAuth}
            >
              <GoogleIcon sx={{ mr: "0.2rem", height: "22px" }}></GoogleIcon>
              Sign In
            </Button>
            <Button variant="contained" style={buttonStyle}>
              Investors Log In
            </Button>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            mt: "14rem",
            ml: "2rem",
            alignItems: "flex-start",
            width: "55%",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontFamily: "Nunito, sans-serif",
              color: "white",
              letterSpacing: "7px",
              fontSize: "5rem",
            }}
          >
            HypePitch
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "1rem",
              color: "#e2e2e2",
            }}
          >
            TRANSFORMING DEALS INTO DEALS
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
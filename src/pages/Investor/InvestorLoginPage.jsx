import { CssBaseline, Typography } from "@mui/material";
import React, { useState } from "react";

const InvestorLoginPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputValuePassword, setInputValuePassword] = useState("");
  const handleChangePassword = (event) => {
    setInputValuePassword(event.target.value);
  };

  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "rgb(230,41,41)",
        background:
          "linear-gradient(90deg, rgba(230,41,41,1) 0%, rgba(112,84,240,1) 100%)",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundAttachment: "fixed",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h3"
          style={{
            color: "white",
            borderBottom: "3px solid white",
            padding: "6px",
          }}
        >
          Log in
        </Typography>
        <form
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <label htmlFor="con" style={{ fontSize: "20px", color: "white" }}>
              Email Id :
            </label>
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Name"
            id="con"
            style={{
              width: "60%",
              padding: "12px 20px",
              margin: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />
        </form>

        <form
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <label htmlFor="con" style={{ fontSize: "20px", color: "white" }}>
              Password :
            </label>
          </div>
          <input
            type="text"
            value={inputValuePassword}
            onChange={handleChangePassword}
            placeholder="Name"
            id="con"
            style={{
              width: "60%",
              padding: "12px 20px",
              margin: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />
        </form>

        <button
          style={{
            padding: "12px 20px",
            margin: "8px",
            display: "inline-block",
            border: "1px solid transparent",
            borderRadius: "4px",
            boxSizing: "border-box",
            marginBottom: "20px",
            fontSize: "16px",
            backgroundColor: "#680747",
            color: "white",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InvestorLoginPage;

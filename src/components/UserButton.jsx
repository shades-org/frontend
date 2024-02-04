import { TextField } from "@mui/material";
import React from "react";
const UserButton = ({ data, placeholder = "" }) => {
  return (
    <>
      <TextField
        required
        placeholder={placeholder}
        id="outlined-basic"
        label={data}
        variant="outlined"
        fullWidth
        sx={{
          mt: "2em",
          // border: "1px solid rgba(0, 0, 0, 0.4)",
          outline: "none", // Black border with 0.4 opacity
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          outline: "none",
          fontWeight: "bold",
        }}
      />
    </>
  );
};

export default UserButton;

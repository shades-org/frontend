import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../static/profile_logo.jpg"
import { Box, Typography } from "@mui/material";

export default function Pitchname(){
    return <Box
    sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        mt:'18px'
    }}
    >
        <ReactRoundedImage
          image={MyPhoto}
          roundedSize="0"
          imageWidth="40"
          imageHeight="40"  
              />
              <Typography sx={{
                fontFamily:"Poppins, sans-serif",
                fontSize:"39px",
                ml:'15px',
                fontWeight:'600',
                color:"#233142"
              }}>Pitch Name</Typography>
    </Box>
}
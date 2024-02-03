import { Box, Button, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../static/profile_logo.jpg"

export default function Layout (){
    return <>
    <CssBaseline/>
        <Box sx={{
          display: "flex",
          width: "100%",
          justifyContent:"center",
          alignItems:"center",
          m: 0,
          p: 0,
          bgcolor:"#0092ca",
        }} >
            <Box
            sx={{
                display: "flex",
                bgcolor : "#680747",
                width:"96%",
                justifyContent:"space-between",
                alignItems:"center",
                height:"2.3rem",
                borderRadius: '18px',
                mt:"0.4rem"
            }}
            >
                <Box
                sx={{
                    display: "flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                }}
                >
                <div
                style={{marginLeft:"8px"}}
                >
                <ReactRoundedImage
          image={MyPhoto}
          roundedSize="0"
          imageWidth="25"
          imageHeight="25"  
              /></div>

              <Typography style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1rem",
                fontWeight:"bold",
                marginLeft:"8px",
                color:"white"
              }}>Hebla Kanto</Typography>
              </Box>
            <Box
             sx={{
                 display: "flex",
                 justifyContent:"space-between",
                 alignItems:"center",
                }}
                >
                <Button variant="contained" sx={{
                    bgcolor:"#c3195d",
                    height:"28px",
                    textTransform:"capitalize",
                    fontFamily:"Poppins, sans-serif",
                    px:"30px",
                    mr:"10px",
                }} style={{backgroundColor:'#c3195d',boxShadow:"0 0 0 0"}}>Profile</Button>
                <Button variant="contained"
                sx={{
                    bgcolor:"#c3195d",
                    height:"28px",
                    textTransform:"capitalize",
                    fontFamily:"Poppins, sans-serif",
                    px:"30px",
                    mr:"13px"
                }}style={{backgroundColor:'#c3195d',boxShadow:"0 0 0 0"}}
                >Log<span style={{textTransform:'lowercase',marginLeft:"5px"}}> out</span></Button>
            </Box>
        </Box>
        </Box>
        <Outlet/>
        </>
}
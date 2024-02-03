import { Box,Link,Typography } from "@mui/material";
import React from "react";

export default function AdditionalLink(){
    return <Box
    sx={{
        width:"1000px"
    }}
    >
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"start"
        }}>
           <Box
            sx={{
                width:'100%',
               mb:"10px"
            }}
            ><Typography sx={{
                fontFamily:"Poppins, sans-serif",
                fontSize:"23px",
                color:"#233142",
                fontWeight:'bold',
                width:"100%",
                borderBottom:"3px solid #233142",
                mb:"5px"
              }}>Additional Link</Typography>

<Typography
            sx={{
                fontFamily:"Poppins, sans-serif",
                fontSize:"18px",
                width:"100%",
              }}
            >Our Website : <Link href="https://mui.com/material-ui/react-link/" underline="hover" sx={{color:"#062925"}}>
            Click Here
            </Link> </Typography>

            <Typography
            sx={{
                fontFamily:"Poppins, sans-serif",
                fontSize:"18px",
                width:"100%",
              }}
            >Our Retailers : <Link href="https://mui.com/material-ui/react-link/" underline="hover" sx={{color:"#062925"}}>
            Click Here
            </Link> </Typography>
            
            
              </Box>
    </Box>
    </Box>
}
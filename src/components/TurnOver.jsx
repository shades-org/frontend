import { Box ,Typography} from "@mui/material";
import React from "react";

export default function TurnOver(){
    return <Box sx={{
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
                mb:"15px"
              }}>Turn Over</Typography>
              <Typography
            sx={{
                fontFamily:"Poppins, sans-serif",
                fontSize:"18px",
                width:"100%",
              }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio dolorem sint. Sequi a maxime mollitia libero. Magnam, non illum rerum quo qui sint soluta nesciunt tenetur at aut facilis.</Typography>
              </Box>
    </Box>
    </Box>
}
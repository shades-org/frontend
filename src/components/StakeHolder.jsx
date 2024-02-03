import { Box ,Typography} from "@mui/material";
import React from "react";
import CardStake from "./CardStake";


export default function StakeHolder(){
    return <Box sx={{
        width:"1000px"
    }}>
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
              }}>Stake Holders</Typography>
              <Box sx={{
                display:'flex',
                flexWrap:"wrap",
                justifyContent:"start"
              }}>
              <CardStake></CardStake>
              <CardStake></CardStake>
              </Box>
              </Box>
        </Box>
        
    </Box>
}
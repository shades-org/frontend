
import { Box,Typography } from "@mui/material";
import React from "react";
import ReactPlayer from 'react-player';



export default function AddVideo(){
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
                mb:"15px"
              }}>Videos</Typography>
              </Box>
              <Box
              sx={{width:"100%",
              display:'flex',
              justifyContent:"center"
            }

            }
              >
              <ReactPlayer 
              url="<https://www.youtube.com/watch?v=3Y46v1ymdfQ-U>"
              width="640"
              height="390"
              controls
              style={{marginBottom:'10px'}}
              ></ReactPlayer>
              </Box>
        </Box>
    </Box>
}
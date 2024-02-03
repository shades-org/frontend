import { Box, Typography } from "@mui/material";
import React from "react";

export default function TagDes(){
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
              }}>Tagline</Typography>

            <Typography
            sx={{
                fontFamily:"Poppins, sans-serif",
                fontSize:"18px",
                width:"100%",
              }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio dolorem sint. Sequi a maxime mollitia libero. Magnam, non illum rerum quo qui sint soluta nesciunt tenetur at aut facilis.</Typography>

              </Box>

              <Box
            sx={{
                width:'100%',
               mb:'10px'
            }}
            ><Typography sx={{
                fontFamily:"Poppins, sans-serif",
                fontSize:"23px",
                color:"#233142",
                fontWeight:'bold',
                width:"100%",
                borderBottom:"3px solid #233142",
                mb:"5px"
              }}>Description</Typography>

            <Typography
            sx={{
                fontFamily:"Poppins, sans-serif",
                fontSize:"18px",
                width:"100%",
              }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio dolorem sint. Sequi a maxime mollitia libero. Magnam, non illum rerum quo qui sint soluta nesciunt tenetur at aut facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur commodi dicta illum qui ducimus dolores ipsa officiis. Suscipit voluptates nemo, molestias debitis repellat ipsam ullam? Porro iste facere quis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat doloremque unde dolore necessitatibus sunt eligendi, tenetur, aut, minus temporibus non animi odit! Cumque sed suscipit ipsum error tenetur deserunt vel molestiae id natus, consequatur optio numquam? Similique numquam, doloribus praesentium odit neque animi modi. Totam reiciendis cum ipsum quae pariatur!</Typography>

              </Box>

        </Box>
    </Box>
}
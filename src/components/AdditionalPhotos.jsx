
import { Box,Typography } from "@mui/material";
import React from "react";
import product from "../static/product.jpg"

export default function AdditionalPhotos(){
  const PhotosStyle={
        marginLeft:"20px",
        marginBottom:"20px",
        borderRadius:"20px",
        height:"250px",
        width:"210px",
        objectFit:"cover"
      }



    return<Box sx={{
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
                mb:"15px"
              }}>Additional Photos</Typography>
              <img
              src={product}
              alt="product"
              style={PhotosStyle}
              ></img>
              <img
              src={product}
              alt="product"
              style={PhotosStyle}
              ></img>
              <img
              src={product}
              alt="product"
              style={PhotosStyle}
              ></img>
              <img
              src={product}
              alt="product"
              style={PhotosStyle}
              ></img>
              </Box>
              
    </Box>
    </Box>
}
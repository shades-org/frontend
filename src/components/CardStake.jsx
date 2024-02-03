import { Box ,Typography} from "@mui/material";
import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../static/profile_logo.jpg"

export default function CardStake(){
    return<Box

    >
    
    <Box sx={{
        backgroundColor:"rgb(212,97,190)",
        background:" linear-gradient(307deg, rgba(212,97,190,1) 0%, rgba(240,190,84,1) 100%)",
        height:"270px",
        width:"240px",
        marginTop: "15px",
        ml:"35px",
        borderRadius:"20px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        p:"20px",
        mb:"20px"
    }}>
         <ReactRoundedImage
          image={MyPhoto}
          roundedSize="0"
          imageWidth="80"
          imageHeight="80"  
              />

<Typography  sx={{
            pl:"5px",
            width:"100%",
            fontFamily:"Poppins, sans-serif",
            borderBottom:"1px solid black",
            mb:"2px"
        }}>Name</Typography>

<Box sx={{
            bgcolor:"#e46161",
            width:"100%",
            height:"40px",
            borderRadius:"10px",
            mb:"5px",
            display:"flex",
            px:"10px",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <Typography sx={{
                whiteSpace:"nowrap",
                overflow:"hidden",
                textOverflow:"ellipsis",
                fontFamily:"Poppins, sans-serif",
                fontWeight:"600",
            }}> kala kalua</Typography>
        </Box>

        
<Typography  sx={{
            pl:"5px",
            width:"100%",
            fontFamily:"Poppins, sans-serif",
            borderBottom:"1px solid black",
            mb:"2px"
        }}>Designation</Typography>

<Box sx={{
            bgcolor:"#e46161",
            width:"100%",
            height:"40px",
            borderRadius:"10px",
            mb:"5px",
            display:"flex",
            px:"10px",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <Typography sx={{
                whiteSpace:"nowrap",
                overflow:"hidden",
                textOverflow:"ellipsis",
                fontFamily:"Poppins, sans-serif",
                fontWeight:"600",
            }}> Investor</Typography>
        </Box>
    </Box>
    </Box>
}
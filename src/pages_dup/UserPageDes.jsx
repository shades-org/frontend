import AddVideo from "@/components/AddVideo";
import AdditionalLink from "@/components/AdditionalLink";
import AdditionalPhotos from "@/components/AdditionalPhotos";
import Pitchname from "@/components/Pitchname";
import StakeHolder from "@/components/StakeHolder";
import TagDes from "@/components/TagDes";
import TurnOver from "@/components/TurnOver";
import { Box, Button, CssBaseline } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserPageDes(){

    const navigate=useNavigate()
    return <div>
        <CssBaseline/>
        <Box 
        sx={{
            minHeight:"100vh",
            minWidth:"100vw",
            backgroundColor:"rgb(230,41,41)",
            background:"linear-gradient(90deg, rgba(230,41,41,1) 0%, rgba(112,84,240,1) 100%)",
            backgroundAttachment:"fixed",
            display:"flex",
            flexDirection:"column",
            alignItems:'center'
        }}
        >
            <Pitchname></Pitchname>
            <TagDes></TagDes>
            <StakeHolder></StakeHolder>
            <AdditionalLink></AdditionalLink>
            <AdditionalPhotos></AdditionalPhotos>
            <TurnOver></TurnOver>
            <AddVideo></AddVideo>
            <Button variant="contained" sx={{
                bgcolor:"#c3195d",
                height:"28px",
                textTransform:"capitalize",
                fontFamily:"Poppins, sans-serif",
                px:"20px",
                mb:"10px"
            }} style={{backgroundColor:'#c3195d',boxShadow:"0 0 0 0"}} onClick={()=>navigate(-1)}>Close</Button>
        </Box>
    </div>
}
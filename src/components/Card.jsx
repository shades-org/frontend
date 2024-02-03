import { Box, Button, CssBaseline, Typography } from "@mui/material";
import React from "react";

const cards = [{
    title : "hello guys",
    tagline : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, mollitia?"  
},{
    title:"hii guys yo",
    tagline: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus"
}]

export default function Card(){
    return   cards.map((card)=><div>
    <CssBaseline/>
    <Box sx={{
        backgroundColor:"rgb(212,97,190)",
        background:" linear-gradient(307deg, rgba(212,97,190,1) 0%, rgba(240,190,84,1) 100%)",
        height:"240px",
        width:"240px",
        marginTop: "15px",
        ml:"35px",
        borderRadius:"20px",
        display:"flex",
        flexDirection:"column",
        p:"20px",
        mb:"20px"
    }}>
        <Typography  sx={{
            pl:"5px",
            fontFamily:"Poppins, sans-serif",
            borderBottom:"1px solid black",
            mb:"8px"
        }}>Pitch Name</Typography>
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
            }}> {card.title}</Typography>
        </Box>
        <Typography sx={{
            pl:"5px",
            fontFamily:"Poppins, sans-serif",
            borderBottom:"1px solid black",
            mb:"8px"
        }}>Tagline</Typography>
        <Box sx={{
            bgcolor:"#e46161",
            width:"100%",
            height:"40px",
            borderRadius:"10px",
            mb:"10px",
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
            }}> {card.tagline}</Typography>
        </Box>
        <Box
        sx={{
            width:"100%",
            height:"40px",
            display:"flex",
            justifyContent:"space-between"
        }}
        >
             <Button variant="contained" sx={{
                bgcolor:"#c3195d",
                height:"28px",
                textTransform:"capitalize",
                fontFamily:"Poppins, sans-serif",
                px:"20px",
            }} style={{backgroundColor:'#c3195d',boxShadow:"0 0 0 0"}}>Edit</Button>
            <Button variant="contained" sx={{
                bgcolor:"#c3195d",
                height:"28px",
                textTransform:"capitalize",
                fontFamily:"Poppins, sans-serif",
                px:"20px",
            }} style={{backgroundColor:'#c3195d',boxShadow:"0 0 0 0"}}>See More</Button>
        </Box>
    </Box>
</div>)  
}
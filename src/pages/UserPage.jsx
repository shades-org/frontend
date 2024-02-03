import Card from "@/components/Card";
import { Box, CssBaseline,Button} from "@mui/material";
import React from "react";




export default function UserPage (){
    

    return <>
    <CssBaseline/>
    <Box sx={{
        bgcolor:"#0092ca",
        minHeight:"93.6vh",
        minWidth:"100vw",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundAttachment:"fixed"
    }}>
       <Box sx={{
        width:'85%',
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
       }}>
        <Card></Card>
       </Box>
       <Box sx={{
        mt:"15px",
        mr:"43px"
       }}
       >
       <Button variant="contained" sx={{
                    height:"28px",
                    textTransform:"capitalize",
                    fontFamily:"Poppins, sans-serif",
                    px:"30px",
                    py:"16px",
                    fontWeight:"600"
                }} style={{backgroundColor:'white',boxShadow:"0 0 0 0",color:"black"}}>Add <span style={{textTransform:"lowercase",marginInline:"4px"}}>a</span> Pitch</Button>
       </Box>
    </Box>
    </>
}
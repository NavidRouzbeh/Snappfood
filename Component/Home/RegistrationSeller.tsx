import React from 'react'
import Image from 'next/image'
import Home from "../../Assets/Images/vendor_pic.png"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import FoundationIcon from '@mui/icons-material/Foundation'

const RegistrationSeller = () => {
  return (
    <Grid container bgcolor={"rgb(249, 250, 251)"} borderRadius={4} pb={10} sx={{ width:{ xs:"12", lg: "90%"} , display: { sm: "flex", xs: "none" }}} mt={18} display={"flex"} justifyContent={"space-around"}>
      <Grid container item position={"relative"} xs={4} ml={10}>
        <Grid item position={"absolute"} bottom={10} right={"3.4375rem"} sx={{display: { md: "flex", xs: "none" } }}  >
          <Image width={424} src={Home} alt={",mnjhbgvf"} />
        </Grid>
      </Grid>
      <Grid container item  display={"flex"} md={6}  dir={"rtl"} sx={{ paddingRight:{xs:"20px" , md:"0px"} , marginRight:{md:"90px" , xs:"0px"}}} >
        <Grid item mt={7} md={12}>
          <Typography variant="h1" >{" صاحب کسب و کار هستید؟"}</Typography>
        </Grid>
        <Grid item mt={12}  md={12}>
          <Typography variant="h3" >{"با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید."} </Typography>
        </Grid>
        <Grid item mt={8} md={12}  >
            <Button  sx={{height:"3rem" , fontWeight:"700" , width:"auto" , minWidth:"6.6875rem"}} variant="contained"><FoundationIcon/>{"ثبت نام فروشندگان  "}</Button>
          </Grid>
        </Grid>
      </Grid>   
  )
}

export default RegistrationSeller
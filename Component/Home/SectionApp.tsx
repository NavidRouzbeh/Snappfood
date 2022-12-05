import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import appsection from "../../Assets/Images/app_mockup.png"
import play from "../../Assets/Images/play.png"
import Image from 'next/image'

const SectionApp = () => {
  return (

    <Grid container bgcolor={"#EDEFF0"} borderRadius={"0  0 70px 0"} pb={10} sx={{ width:{ xs:"12", lg: "90%"} , display: { sm: "flex", xs: "none" }}} mt={13} display={"flex"} justifyContent={"space-around"}>
      <Grid container item position={"relative"} xs={4} ml={10}>
        <Grid item position={"absolute"} bottom={0.5} right={"3.4375rem"} sx={{display: { md: "flex", xs: "none" } }}  >
          <Image width={424} src={appsection} alt={",mnjhbgvf"} />
        </Grid>
      </Grid>
      <Grid container item md={6}  dir={"rtl"} sx={{paddingRight:{xs:"20px" , md:"0px"} , marginRight:{md:"80px" , xs:"0px"}}} >
        <Grid item mt={7}>
          <Typography variant="h1" >{"اپلیکیشن اسنپ‌فود"}</Typography>
        </Grid>
        <Grid item mt={8}>
          <Typography variant="subtitle1" fontSize={"0.94rem"} color={"rgb(83 86 92)"} lineHeight={"1.8rem"}>{"با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید."} </Typography>
        </Grid>
        <Grid item mt={8} md={12}  >
          <Typography variant='body2' color={"#000"}>{" برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید "}</Typography>
          <Grid item md={10} mt={2} borderRadius={2} p={1} display={"flex"} bgcolor={"#fff"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography  color={"#909090"}>{"*********۰۹"}</Typography>
            <Button sx={{ bgcolor: "#FF00A6", height: "35px", width: "130px" }} variant="contained">{"دریافت لینک"}</Button>
          </Grid>
        </Grid>
        <Grid item mt={10}  xs={12} display={"flex"}  justifyContent="space-around">
          <Grid item bgcolor={"#040404"} borderRadius={1} p={1}  >
            <Image width={120} color={"#fff"} src={play} alt={",mnjhbgvf"} />
          </Grid>
          <Grid item bgcolor={"#040404"} borderRadius={1} p={1}>
            <Image width={120} src={play} alt={",mnjhbgvf"} />
          </Grid>
          <Grid item bgcolor={"#040404"} borderRadius={1} p={1}>
            <Image width={120} src={play} alt={",mnjhbgvf"} />
          </Grid>
          <Grid item bgcolor={"#000"} borderRadius={1} p={1} >
            <Image width={120} src={play} alt={",mnjhbgvf"} />
          </Grid>
        </Grid>

      </Grid>

          </Grid>
  )
}

export default SectionApp
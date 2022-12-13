import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Image from 'next/image'
import { NavbarSectionItem } from '../../../Data/NavbarSection/NavbarSection.data' 

const NavbarSection = () => {
    return (
        <Grid container display={"flex"} position={'sticky'} top={60} bgcolor={'#F9FAFB'} zIndex={200} borderBottom={{sm:"1px solid #EBEDF0"}} flexWrap={"wrap"} pt={4} sx={{overflowX:{sm:"auto", xs:"hidden" } ,  minWidth:'100px' , cursor:"pointer"}} >
            {
                NavbarSectionItem.map(item =>(
                    <Grid item xs={4}  sm={1.5} key={item.id}  display={"flex"}  justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
                    <Grid item  mb={3} sx={{bgcolor:{xs:"#f5f3ff" , sm:"#fff"} , padding:{xs:"25px 32px" , sm:"0"}}}  borderRadius={4}  >
                    <Image style={{width:"40px" , height:"40px"}} src={item.image} alt={"dfg"} />
                    </Grid>
                    <Grid item mb={3}>
                    <Typography variant='subtitle1' color={"rgb(83, 86, 92)"}>{item.title}</Typography>
                    </Grid>
                </Grid>
                ))
            }
            </Grid>
       
    )
}

export default NavbarSection
import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Image from 'next/image'
import { NavbarSectionItem } from '../../../Data/NavbarSection/NavbarSection.data' 

const NavbarSection = () => {
    return (
        <Grid container flexWrap={"wrap"} borderBottom={"1px solid #EBEDF0"} pt={4} minWidth={"100px"}  sx={{overflowx:"auto" , cursor:"pointer"}} >
            {
                NavbarSectionItem.map(item =>(
                    <Grid item xs={3} sm={1.5} key={item.id}  display={"flex"}  justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
                    <Grid item  mb={3} sx={{bgcolor:{xs:"#f5f3ff" , sm:"#fff"} , padding:{xs:"20px 23px" , sm:"0"}}}  borderRadius={4}  >
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
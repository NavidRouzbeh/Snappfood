import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { ReactNode } from "react";

import Club from '../../../Assets/Svgs/ProfileMobileSvg/club.svg'
import Image from "next/image";
const style={
    width:'100%',
    height:'100%',
    bgcolor:'white',
    border: '2px solid #fff',
}
interface ProfileMobileTypes{
    id:number,
    icon:ReactNode,
    title:string
}
const ProfileMobileData=[
    {id:1,icon:'',title:''},
    {id:2,icon:'',title:''},
    {id:3,icon:'',title:''},
    {id:4,icon:'',title:''},
    {id:5,icon:'',title:''},
    {id:6,icon:'',title:''},
    {id:7,icon:'',title:''},
    {id:8,icon:'',title:''},
    {id:9,icon:'',title:''},
    {id:10,icon:'',title:''},

]

const ProfileMobile =()=>{
    return(
        <Box sx={style}>
            <Grid xs={12} bgcolor={'red'} mt={6}>
                <Grid p={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Grid>
                        <Typography variant="subtitle2" fontSize={'0.875rem'}>مریم کهن</Typography>
                        <Typography variant="body2">نمایش اطلاعات کاربری</Typography>
                    </Grid>
                    <Grid>
                        <ArrowBackIosOutlinedIcon fontSize="medium" sx={{color:"rgb(58,61,66)"}}/>
                    </Grid>
                </Grid>
                <Divider/>

                <Grid p={2} display={'flex'} justifyContent={'space-between'}>
                    <Grid display={'flex'} alignItems={'center'}>
                        <Image src={Club} alt=''/>
                        <Typography mr={'8px'}>عنوان ایکون</Typography>
                    </Grid>
                    <Grid>
                        <ArrowBackIosOutlinedIcon/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProfileMobile;
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { ReactNode } from "react";

import Club from '../../../Assets/Svgs/ProfileMobileSvg/club.svg'
import wallet from '../../../Assets/Svgs/ProfileMobileSvg/wallet.svg'
import ap from '../../../Assets/Svgs/ProfileMobileSvg/ap.svg'
import prize from '../../../Assets/Svgs/ProfileMobileSvg/prize.svg'
import invite from '../../../Assets/Svgs/ProfileMobileSvg/invite.svg'
import massage from '../../../Assets/Svgs/ProfileMobileSvg/massage.svg'
import coment from '../../../Assets/Svgs/ProfileMobileSvg/coment.svg'
import favourit from '../../../Assets/Svgs/ProfileMobileSvg/favourit.svg'
import list from '../../../Assets/Svgs/ProfileMobileSvg/list.svg'
import exit from '../../../Assets/Svgs/ProfileMobileSvg/exit.svg'


import Image from "next/image";
const style={
    width:'100%',
    height:'100%',
    bgcolor:'white',
    // border: '2px solid #fff',
    overflowY:'scroll'
}
interface ProfileMobileTypes{
    id:number,
    icon:ReactNode,
    title:string
}
const ProfileMobileData:ProfileMobileTypes[]=[
    {id:1,icon:Club,title:'اسنپ! کلاب'},
    {id:2,icon:wallet,title:'کیف پول آپ'},
    {id:3,icon:ap,title:'فعال سازی پرداخت مستقیم آپ'},
    {id:4,icon:prize,title:'تخفیف ها و جایزه ها'},
    {id:5,icon:invite,title:'دعوت از دوستان'},
    {id:6,icon:massage,title:'پیام ها'},
    {id:7,icon:coment,title:'نظرات من'},
    {id:8,icon:favourit,title:'رستوران های مورد علاقه'},
    {id:9,icon:list,title:'لیست پرداخت ها'},
    {id:10,icon:exit,title:'خروج'},

]

const ProfileMobile =()=>{
    return(
        <Box sx={style}>
            <Grid width={'100%'} bgcolor={'red'} height={40} position={'fixed'}></Grid>
            <Grid xs={12} mt={4} sx={{overflowY:'scroll',cursor:'pointer'}}>
                <Grid p={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Grid>
                        <Typography variant="h3">مریم کهن</Typography>
                        <Typography variant="subtitle1" color={'rgb(58,61,66)'}>نمایش اطلاعات کاربری</Typography>
                    </Grid>
                    <Grid>
                        <ArrowBackIosOutlinedIcon fontSize="small" sx={{color:"rgb(58,61,66)"}}/>
                    </Grid>
                </Grid>
                <Divider/>
                {ProfileMobileData.map(item=>(
                    <>
                    <Grid p={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Grid display={'flex'} alignItems={'center'}>
                            <Image src={item.icon} alt=''/>
                            <Typography mr={'8px'} variant={'subtitle2'} fontWeight={300}>{item.title}</Typography>
                        </Grid>
                        <Grid>
                            <ArrowBackIosOutlinedIcon fontSize="small" sx={{color:"rgb(58,61,66)"}}/>
                        </Grid>
                    </Grid>
                    <Divider/>
                    </>
                ))}

                {/* <Grid p={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Grid display={'flex'} alignItems={'center'}>
                        <Image src={Club} alt=''/>
                        <Typography mr={'8px'} variant={'subtitle2'} fontWeight={300}>عنوان ایکون</Typography>
                    </Grid>
                    <Grid>
                        <ArrowBackIosOutlinedIcon fontSize="small" sx={{color:"rgb(58,61,66)"}}/>
                    </Grid>
                </Grid>
                <Divider/> */}
            </Grid>
        </Box>
    )
}

export default ProfileMobile;
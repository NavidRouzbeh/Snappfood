import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { SwiperSlide } from 'swiper/react';
import SwipperContainer from '../../Swiper/SwipperContainer';
import DesktopVendor from '../../VendorCard/DesktopVendorCard';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Cardtitleresturant } from '../../../Data/CardResturant/CardResturant';

const CardResturantContainer =()=>{
  const m:number[]=[0,1,3,4,5,6,7,8]
    return(
        <>
        {Cardtitleresturant.map(item=>(
            <Grid container xs={11} m={4} p={2} width={'100%'}>
                    <Grid display={'flex'} alignItems={'center'} xs={12} justifyContent={'space-between'}>
                        <Typography variant='h2'>{item.title}</Typography>
                        <Grid display={'flex'} alignItems={'center'}>
                            <Typography variant='h3' fontSize={'1.2rem'} color={'success.main'} ml={1}>مشاهده همه </Typography>
                            <ArrowBackIosRoundedIcon color={'success'} fontSize={'small'}/>
                        </Grid>
                    </Grid>
                <Grid item xs={12}>
                    <SwipperContainer>
                        {m.map(item=>(
                            <SwiperSlide><DesktopVendor/></SwiperSlide>
                        ))}
                    </SwipperContainer>
                </Grid>
            </Grid>
        ))}
        </>
    )
}

export default CardResturantContainer;
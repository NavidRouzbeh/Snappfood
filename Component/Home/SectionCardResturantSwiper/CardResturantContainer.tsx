import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { SwiperSlide } from 'swiper/react';
import SwipperContainer from '../../Swiper/SwipperContainer';
import DesktopVendor from '../../VendorCard/DesktopVendorCard';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const Cardtitleresturant =[{id:1,title:'یک تجربه جدید'},{id:2,title:'برترین ها'},{id:3,title:'دارای تخفیف'},{id:4,title:'درای کوپن'},{id:5,title:'فقط در اسنپ فود'}]
const CardResturantContainer =()=>{
  const m:number[]=[0,1,3,4,5,6,7,8]
    return(
        <>
        {Cardtitleresturant.map(item=>(
            <Grid container xs={11} m={4} p={2} width={'100%'}>
                    <Grid display={'flex'} alignItems={'center'} xs={12} justifyContent={'space-between'}>
                        <Typography variant='h2'>{item.title}</Typography>
                        <Grid display={'flex'} alignItems={'center'}>
                            <Typography variant='h2' color={'success.main'} ml={1}>مشاهده همه </Typography>
                            <ArrowBackIosRoundedIcon color={'success'} fontSize={'small'}/>
                        </Grid>
                    </Grid>
                <Grid item xs={12}>
                    <SwipperContainer>
                        {m.map(item=>(
                            <SwiperSlide><DesktopVendor/></SwiperSlide>
                        ))}
                    </SwipperContainer>
                    {/* <CardPartyDesktop/> */}
                </Grid>
            </Grid>
        ))}
        </>
    )
}

export default CardResturantContainer;
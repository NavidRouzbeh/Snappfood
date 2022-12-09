import Image from 'next/image';
import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Logo from "../../Assets/Images/shila_logo.jpg";
import Background from "../../Assets/Images/shila.jpg";
import CourierLogo from "../../Assets/Icons/CourierIcon.svg";
import StarIcon from '@mui/icons-material/Star';

const DesktopVendor = () => {

    return(

    <Card  sx={{height:'21.3125rem', width:'18.5rem' }}>
      
      <Grid sx={{height:'40%'}}>
        <Image src={Background} alt="" style={{height: '100%', objectFit:'cover'}} />
      </Grid>
      <Grid sx={{position:'relative', height:'%60'}} display={'flex'} justifyContent={'center'}>
        <Grid sx={{position:'absolute', right:100, top:-66}} >
          <Image src={Logo} alt="" style={{ 
            width:'5.5rem',
            height: '5.5rem',
            border: '1px solid rgba(58, 61, 66, 0.06)',
            borderRadius: '0.75rem',
            }}/>
        </Grid>
        <Grid alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'} sx={{mt:'2.5rem'}}>
          <Grid>
            <Typography variant='h3'>پیتزا شیلا (سعادت آباد)</Typography>
          </Grid>
          <Grid>
            <Grid display={'flex'} justifyContent={'center'} gap={1} sx={{mt:'0.5rem'}}>
              <Grid display={'flex'} textAlign={'center'}>
                <StarIcon sx={{ color:'orange', width:12, height:12 }} />
                <Typography variant='subtitle1'>۴.۵</Typography>
              </Grid>
              <Typography variant='subtitle1'>(۲۳,۳۰۲ )</Typography>
            </Grid>
            <Typography  variant='subtitle1' textAlign={'center'} sx={{mt:'0.5rem'}}>فست‌فود، پیتزا، ساندویچ</Typography>
          </Grid>
          <Grid>
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  sx={{
                mt:'1.5rem',
                backgroundColor:'rgb(255, 255, 255)',
                borderRadius:'4.5rem',
                width:'210px',
                height:'40px',
                boxShadow: 'rgb(58 61 66 / 16%) 0px 1px 0px'
              }}>
                <Grid display={'flex'} gap={1} >
                  <Image src={CourierLogo} alt="" />
                  <Typography variant='subtitle1'>پیک فروشنده</Typography>
                  <Typography variant='subtitle1'> ۱۵,۰۰۰ </Typography>
                  <Typography variant='subtitle1'>تومان</Typography>
                </Grid>
              </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>

    )

}

export default DesktopVendor;

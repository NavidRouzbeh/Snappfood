import Image from 'next/image';
import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import shl from "../../Assets/Images/shila_logo.jpg";
import shb from "../../Assets/Images/shila.jpg";


const DesktopVendor = () => {

    return(

    <Card  sx={{height:'21.3125rem', width:'18.5rem' }}>
      
      <Grid style={{height:'40%'}}>
        <Image src={shb} alt="" style={{height: '100%', objectFit:'cover'}} />
      </Grid>
      <Grid sx={{position:'relative', height:'%60'}} display={'flex'} justifyContent={'center'}>
        <Grid sx={{position:'absolute', right:100, top:-66}} >
          <Image src={shl} alt="" style={{ 
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
              <Typography variant='subtitle1'>۴.۵</Typography>
              <Typography variant='subtitle1'>(۲۳,۳۰۲ )</Typography>
            </Grid>
            <Typography  variant='subtitle1' textAlign={'center'} sx={{mt:'0.5rem'}}>فست‌فود، پیتزا، ساندویچ</Typography>
          </Grid>
          <Grid>
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  sx={{
                mt:'1.5rem',
                backgroundColor:'rgb(255, 255, 255)',
                borderRadius:'4.5rem',
                width:'200px',
                height:'40px',
                boxShadow: 'rgb(58 61 66 / 16%) 0px 1px 0px'
              }}>
                <Typography variant='subtitle1'>پیک فروشنده</Typography>
              </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>

    )

}

export default DesktopVendor;

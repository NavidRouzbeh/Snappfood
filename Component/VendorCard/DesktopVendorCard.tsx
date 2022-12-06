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

  const imageStyle = {
    height: '100%',
    objectFit:'cover'
  }

    return(

    <Card  sx={{height:'21.3125rem', width:'18.5rem' }}>
      
      <Grid style={{height:'40%'}}>
        <Image src={shb} alt="" style={imageStyle} />
      </Grid>
      <Grid style={{height:'60%'}}>
        <Grid >
          <Image src={shl} alt="" style={{ 
            width:'5.5rem',
            height: '5.5rem',
            border: '1px solid rgba(58, 61, 66, 0.06)',
            borderRadius: '0.75rem',
            position:'relative', right:'100px', bottom:'66px'}}/>
        </Grid>
        <Grid  style={{position:'relative', bottom:'55px'}}>
          <Grid>
            <Typography variant='h3' textAlign={'center'}>پیتزا شیلا (سعادت آباد)</Typography>
          </Grid>
          <Grid>
            <Grid display={'flex'} justifyContent={'center'} gap={1}>
              <Typography variant='subtitle1'>۴.۵</Typography>
              <Typography variant='subtitle1'>(۲۳,۳۰۲ )</Typography>
            </Grid>
            <Typography  variant='subtitle1' textAlign={'center'} sx={{mt:'5px'}}>فست‌فود، پیتزا، ساندویچ</Typography>
          </Grid>
          <Grid>
            <Grid>
              <Box textAlign={'center'} sx={{
                backgroundColor:'red',
                borderRadius:'4.5rem',
                width:'70%',
                height:'40px',
                boxShadow: 'rgb(58 61 66 / 6%) 0px 1px 0px'
              }}>
                <Typography variant='subtitle1'>پیک فروشنده</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>

    )

}

export default DesktopVendor;

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Image from "next/image";
import Background from "../../Assets/Images/shila.jpg"
import Logo from "../../Assets/Images/shila_logo.jpg"
import { Typography } from "@mui/material";
const MobileVendorCard = () => {

    return(

        <Card sx={{
            width:'20rem',
            height:'15.5rem',
            borderRadius:'0.4rem'
        }}>

            <Grid sx={{
                width:'100%',
                height:'40%'
            }}>
                <Image style={{ width:'100%', height:'100%', objectFit:'cover'}} src={Background} alt='' />
            </Grid>

            <Grid sx={{position:'absolute', width:'20rem', py:3.5, px:2}}>
                <Grid sx={{position:'absolute', right:10, top:-50}} >
                    <Image src={Logo} alt="" style={{ 
                        width:'4.5rem',
                        height: '4.5rem',
                        border: '1px solid rgba(58, 61, 66, 0.06)',
                        borderRadius: '0.75rem',
                        }}/>
                </Grid>
                <Grid  display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="h3" sx={{fontSize:'0.8rem'}}>پیتزا شیلا (سعادت آباد)</Typography>

                        <Grid display={'flex'} alignItems={'center'} gap={1}>
                            <Typography variant="subtitle1" sx={{fontSize:'0.7rem'}}>(۲۳,۳۰۲ )</Typography>
                            <Typography variant="subtitle1" sx={{fontSize:'0.7rem'}}>۴.۵</Typography>
                        </Grid>

                </Grid>
            </Grid>

        </Card>

    )

}

export default MobileVendorCard;
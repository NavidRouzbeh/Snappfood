import { Grid, IconButton, Typography, Divider } from "@mui/material";
import Image from "next/image";
import DeliveryTime from "../../Assets/Icons/DeliveryTime.svg";
import CartDownArrow from "../../Assets/Icons/CartDownArrow.svg";
import Deliveryman from '../../Assets/Icons/Deliveryman.svg';
import Delete from "../../Assets/Icons/Delete.svg";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Cart = () => {

    return(

        <Grid sx={{ bgcolor:'red', maxWidth:'25%'}}>
            <Grid
            display={'flex'}
            alignItems='center'
            justifyContent={'space-between'}
            sx={{
                height:'50px',
                bgcolor:'white',
                borderRadius:'0.5rem',
                px:1
            }}
            >
                <Grid display={'flex'} >
                    <Image src={DeliveryTime} alt='' />
                    <Typography variant="subtitle1" sx={{pr:'5px'}}>دریافت در سریع‌ترین زمان ممکن</Typography>
                </Grid>
                <Grid>
                    <Image src={CartDownArrow} alt='' />
                </Grid>
            </Grid>

            <Grid
            display={'flex'}
            alignItems='center'
            justifyContent={'space-between'}
            sx={{
                height:'50px',
                bgcolor:'white',
                borderRadius:'0.5rem',
                px:1
            }}
            >
                <Grid display={'flex'} >
                    <Image src={Deliveryman} alt='' />
                    <Typography variant="subtitle1" sx={{pr:'5px'}}>پیک فروشنده رایگان</Typography>
                </Grid>
            </Grid>
            <Grid
            display={'flex'}
            flexDirection={'column'}
            alignItems='center'
            justifyContent={'space-between'}
            sx={{
                height:'auto',
                bgcolor:'white',
                borderRadius:'0.5rem',
                px:1
            }}
            >
                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{width:'100%'}}>
                    <Typography variant="subtitle1">سبد خرید</Typography>
                    <IconButton>
                        <Image src={Delete} alt='' />
                    </IconButton>
                </Grid>
                <Grid display={'flex'} flexDirection={'column'}  sx={{width:'100%'}}>
                    <Typography variant="subtitle1">ساندویج</Typography>
                    <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="subtitle1"> ۲۶۸,۰۰۰ تومان</Typography>
                        <Grid display={'flex'} alignItems={'center'}>
                            <IconButton sx={{width:'1rem', height:'1rem', border: '0.09375rem solid rgba(255, 0, 166, 0.06)', borderRadius:50}}><RemoveIcon  /></IconButton>
                            <Typography variant="subtitle1">1</Typography>
                            <IconButton sx={{ width:'1rem', height:'1rem', border: '0.09375rem solid rgba(255, 0, 166, 0.06)', borderRadius:50}}><AddIcon /></IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
                <Grid>
                    <Grid>
                        <Typography></Typography>
                        
                    </Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                </Grid>
                <Grid></Grid>
            </Grid>
        </Grid>

    )

}

export default Cart
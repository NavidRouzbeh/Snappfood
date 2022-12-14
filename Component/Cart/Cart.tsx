import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import DeliveryTime from "../../Assets/Icons/DeliveryTime.svg";
import CartDownArrow from "../../Assets/Icons/CartDownArrow.svg"


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
            <Grid></Grid>
            <Grid></Grid>
        </Grid>

    )

}

export default Cart
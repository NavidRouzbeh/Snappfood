import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Image from "next/image";
import Cardimg from '../../../Assets/Images/HomeImages/SearchImages/kabab.jpeg'

const ProductDetailCardSearch =()=>{
    return(
        <Grid display={'flex'} flexDirection={'column'} height={130} justifyContent={'space-between'} m={1} py={2}>

            <Grid display={'flex'} xs={12}>
                <Grid xs={3} height={55}>
                    <Image src={Cardimg} style={{width:'100%',height:'100%',borderRadius:4}} alt=''/>
                </Grid>
                <Grid xs={6} mr={2}>
                    <Typography variant="subtitle2" fontSize={'0.75rem'} mb={1}>چلوکباب سینه مخصوص بدون استخوان</Typography>
                    <Typography variant="subtitle1" color={'rgb(58,61,66)'}>رستوران مزه (سهروردی)</Typography>
                </Grid>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant="subtitle1" color={'rgb(83, 86, 92)'}>پیک فروشنده 50.000 تومان</Typography>
                <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant="subtitle2" ml={0.5}>150.000</Typography>
                    <Typography variant="subtitle1"  color={'rgb(58,61,66)'}>تومان</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductDetailCardSearch;
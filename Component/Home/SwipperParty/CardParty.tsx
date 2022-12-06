import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import disi from '../../../Assets/Images/disi.jpeg'
const CardParty = () => {
    return ( 
        <Grid width={"251px"} p={2} borderRadius={'0.5rem'} sx={{cursor:'pointer'}} boxShadow={'0px 2px 8px rgba(0,0,0,0.08),0px 8px 32px rgba(0,0,0,0.16)'} >
            <Grid height={'23.125rem'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
               <Grid>
                 <Typography>{'غذای اصیل ایرانی (اکباتان)'}</Typography>
                 <Typography>{'پیک فروشنده 10,000 تومان'}</Typography>
               </Grid>
               <Grid width={'7.125rem'} height={'7.125rem'}><Image src={disi} alt={'disi'} style={{ width:'100%', height:'100%',borderRadius:'0.5rem'}}/></Grid>
               <Grid><Typography>زبان سلطانی مزه بازار (سرویس س...</Typography></Grid>
               <Grid display={'flex'} width={'100%'}>
                 <Grid width={'50%'} display={'flex'} flexDirection={'column'} >
                   <Grid><Typography>تت</Typography></Grid>
                    <Grid><Typography>ممم</Typography></Grid>
                 </Grid>
                 <Grid width={'50%'} display={'flex'} alignItems={'flex-end'} flexDirection={'column'} >
                   <Grid><Typography>mmmm</Typography></Grid>
                    <Grid><Typography>mmmm</Typography></Grid>
                 </Grid>
               </Grid>
               <Grid width={'100%'} height={2}>
                  <Divider variant="middle" sx={{borderWidth:1}} />
               </Grid>
            </Grid>
        </Grid>
     );
}
 
export default CardParty;
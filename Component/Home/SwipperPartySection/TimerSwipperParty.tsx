import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from "next/image";
import pic from '../../../Assets/Images/placeholder.png'
import pic1 from '../../../Assets/Images/foodparty.png'
const TimerSwipperParty = () => {
    return ( 
     <Grid
        width={"200px"}
        borderRadius={"0.5rem"}
        mx={3}
      >
        <Grid
          height={"20rem"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          m={2}
        >
          <Grid display={'flex'}>
            <Typography>2:45</Typography>
            <Typography><AccessTimeIcon/></Typography>
          </Grid> 
          <Grid>
            <Image src={pic} alt={''}/>
          </Grid>
          <Grid>
            <Image src={pic1} alt={''} />
          </Grid>
          <Grid>
            <Typography variant="body2" color={'common.white'}>{'تخفیفات لحظه ای ویژه شما'}</Typography>
          </Grid>
          <Grid width={'100%'}>
            <Button  sx={{borderRadius:'2rem',backgroundColor:'common.white',color:'common.black',width:'90%'}} >{"مشاهده همه>"}</Button>
          </Grid>
        </Grid>
    </Grid>
     );
}
 
export default TimerSwipperParty;
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import food from "../../../Assets/Images/food.jpeg"

const Cardpopular=()=>{
    return(
     <Grid border={1} borderColor={'#EBEDF0'} p={2} width={{xs:'100%',md:'50%'}}>
        <Grid display={'flex'} flexDirection={'column'}>
           <Grid display={'flex'} justifyContent={'space-between'}>
             <Grid display={'flex'} flexDirection={'column'} >
              <Typography variant="subtitle2">{'بناگوش'}</Typography>
              <Typography variant="subtitle1">{"یک پرس بناگوش"}</Typography>
             </Grid>
             <Grid >
               <Image src={food} alt={'food'} width={112} height={112} style={{borderRadius:4}}/>
             </Grid>
           </Grid>
           <Grid display={'flex'} justifyContent={'space-between'}>
             <Grid><Typography>{'۵۵,۰۰۰ تومان'}</Typography></Grid>
             <Grid boxShadow={2} ><Button > {'افزودن'}</Button></Grid>
           </Grid>
      
        </Grid>
      </Grid>
    )
}
export default Cardpopular;
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
interface CardpopularProps {
  food:{}
}

const Cardpopular=({food}:CardpopularProps)=>{
    return(
     <Grid border={1} borderColor={'#EBEDF0'} p={2} width={{xs:'100%',md:'50%'}}>
        <Grid display={'flex'} flexDirection={'column'}>
           <Grid display={'flex'} justifyContent={'space-between'}>
             <Grid display={'flex'} flexDirection={'column'} >
              <Typography variant="subtitle2">{food.name}</Typography>
              <Typography variant="subtitle1">{food.material}</Typography>
             </Grid>
             <Grid >
               <Image src={food.image} alt={'food'} width={112} height={112} style={{borderRadius:4}}/>
             </Grid>
           </Grid>
           <Grid display={'flex'} justifyContent={'space-between'}>
             <Grid><Typography>{`${food.price} تومان`}</Typography></Grid>
             <Grid boxShadow={2} ><Button > {'افزودن'}</Button></Grid>
           </Grid>
      
        </Grid>
      </Grid>
    )
}
export default Cardpopular;
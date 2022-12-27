import { Grid } from "@mui/material";

const Rec=()=>{
 return(
    <Grid width={{xs:'100%',sm:'50%',md:'25%'}}>
       <Grid width={'100%'} height={200} bgcolor={'red'}>
        <Grid >{' غذاها'}</Grid>
        <Grid >{' پیش غذا'}</Grid>
        <Grid >{' نوشیدنی'}</Grid>
      </Grid>
    </Grid>
 )
}
export default Rec;
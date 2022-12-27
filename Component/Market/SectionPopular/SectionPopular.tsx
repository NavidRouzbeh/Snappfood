import { Grid } from "@mui/material";
import { wrap } from "module";
import { useRef } from "react";
import Cardpopular from "./CardPopular";

const SectionPopular=()=>{
  const foodRef=useRef<null>(null)
  const apptizerRef=useRef<null>(null)
  const drinkRef=useRef<null>(null)
  const scrollToSection=(elementRef:any)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }
    return(
      

     <Grid  border={"1px solid #EBEDF0"}  item xs={12} sm={6} >
      <Grid >
        <Grid xs={12} textAlign={'center'} p={2} ref={foodRef}>{' غذاها'}</Grid>
        <Grid display={'flex'} flexWrap={'wrap'} >
          <Cardpopular/>
          <Cardpopular/>
          <Cardpopular/>
          <Cardpopular/>
        </Grid>
        <Grid xs={12} textAlign={'center'} p={2} ref={apptizerRef}>{' پیش غذا'}</Grid>
        <Grid display={'flex'} flexWrap={'wrap'} >
          <Cardpopular/>
          <Cardpopular/>
          <Cardpopular/>
          <Cardpopular/>
        </Grid>
       <Grid xs={12} textAlign={'center'} p={2} ref={drinkRef}>{' نوشیدنی'}</Grid>
        <Grid display={'flex'} flexWrap={'wrap'} >
          <Cardpopular/>
          <Cardpopular/>
          <Cardpopular/>
          <Cardpopular/>
        </Grid>
      </Grid>
    </Grid>



    )
}
export default SectionPopular;
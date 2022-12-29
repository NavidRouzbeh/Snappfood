import { Grid } from "@mui/material";
import { wrap } from "module";
import { useRef } from "react";
import Cardpopular from "./CardPopular";
interface SectionPopularType {
  market:{}
}
const SectionPopular=({market}:SectionPopularType)=>{
  // const foodRef=useRef<null>(null)
  // const apptizerRef=useRef<null>(null)
  // const drinkRef=useRef<null>(null)
  // const scrollToSection=(elementRef:any)=>{
  //   window.scrollTo({
  //     top:elementRef.current.offsetTop,
  //     behavior:"smooth"
  //   })
  // }
  console.log(market[0])
    return(
      

     <Grid  border={"1px solid #EBEDF0"}  item xs={12} sm={6} >
      <Grid >
      {market.map(res=>(
        <Grid>
        {res.categories?.map(cat=>(
          <>
                <Grid xs={12} textAlign={'center'} p={2} >{cat}</Grid>
                  <Grid display={'flex'} flexWrap={'wrap'} >
                    {res.foods.filter(food=>food.category===cat).map(food=>(
                     <Cardpopular/>
                    ))}
          
                  </Grid>
           </>
        ))}
        </Grid>
           ))}

        {/* <Grid xs={12} textAlign={'center'} p={2} >{' غذاها'}</Grid>
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
      </Grid> */}
    </Grid>
  </Grid>



    )
}
export default SectionPopular;
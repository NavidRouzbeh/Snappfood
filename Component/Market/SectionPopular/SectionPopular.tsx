import { Grid, Typography } from "@mui/material";
import Cardpopular from "./CardPopular";
interface SectionPopularType {
  market:any
}
const SectionPopular=({market}:SectionPopularType)=>{
    return(

    <Grid item xs={12} sm={6} p={2}>
     <Grid  border={"1px solid #EBEDF0"} borderRadius={2}>
      <Grid >
      {market.map((res:any)=>(
        <Grid>
        {res.categories?.map((cat:any)=>(
          <>
                <Grid xs={12} textAlign={'center'} p={2} ><Typography variant="subtitle1"fontWeight={700} color={'rgb(83, 86, 92)'}>{cat}</Typography></Grid>
                  <Grid display={'flex'} flexWrap={'wrap'} >
                    {res.foods.filter((food:any)=>food.category===cat).map((food:any)=>(
                     <Cardpopular food={food}/>
                    ))}

                  </Grid>
           </>
        ))}
        </Grid>
           ))}
    </Grid>
  </Grid>
    </Grid>



    )
}
export default SectionPopular;
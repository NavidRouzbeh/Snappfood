import { Grid, Typography } from "@mui/material";
import Cardpopular from "./CardPopular";
interface SectionPopularType {
  market:[]
}
const SectionPopular=({market}:SectionPopularType)=>{
    return(


     <Grid  border={"1px solid #EBEDF0"}  item xs={12} sm={6} >
      <Grid >
      {market.map((res: any,index: any)=>(
        <Grid key={index}>
        {res.categories?.map((cat: any,index: any)=>(
          <>
                <Grid key={index} xs={12} textAlign={'center'} p={2} ><Typography variant="subtitle1"fontWeight={700} color={'rgb(83, 86, 92)'}>{cat}</Typography></Grid>
                  <Grid display={'flex'} flexWrap={'wrap'} >
                    {res.foods.filter((food: { category: any; }) : any=>food.category===cat).map((food: {}):any=>(
                     <Cardpopular food={food}/>
                    ))}
          
                  </Grid>
           </>
        ))}
        </Grid>
           ))}
    </Grid>
  </Grid>



    )
}
export default SectionPopular;
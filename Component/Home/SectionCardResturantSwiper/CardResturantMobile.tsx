import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import MobileVendorCard from "../../VendorCard/MobileVendorCard";
import { Cardtitleresturant } from "../../../Data/CardResturant/CardResturant";
import HeaderCardResturant from "./HeaderCardResturant";

const CardResturantMobile =()=>{
    const m:number[]=[1,2,3,4]
    return(
        <>
        {Cardtitleresturant.map(item=>(
            <>
            <HeaderCardResturant {...item}/>
            <Grid xs={11} p={2} sx={{overflow:'scroll'}}> 
                    <Grid display={'flex'}  gap={1}>
                        {m.map(item=>(
                            <MobileVendorCard/>
                        ))}
                    </Grid>
            </Grid>
            </>
        ))}
        </>
    )
}

export default CardResturantMobile;
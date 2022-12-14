import { Grid, useMediaQuery, useTheme } from "@mui/material";
import FoodPartyDesktop from "./FoodPartyDesktop";
import FoodPartyMobile from "./FoodPartyMobile";

const SectionFoodParty = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    return ( 
        <Grid xs={11} mx={'auto'} >
        {isDesktop?
           <FoodPartyDesktop/>:<FoodPartyMobile/>
        }
        </Grid>

     );
}
 
export default SectionFoodParty;
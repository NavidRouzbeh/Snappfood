import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import CardResturantContainer from "./CardResturantContainer";
import CardResturantMobile from "./CardResturantMobile";

const SectionCardResturant=()=>{
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    return(
        <Grid xs={12} mt={4}>
            {isDesktop ?
                <CardResturantContainer/> : <CardResturantMobile/>
            }
        </Grid>
    )
}

export default SectionCardResturant;
// overflow={{xs:'scroll',sm:'hidden'}}
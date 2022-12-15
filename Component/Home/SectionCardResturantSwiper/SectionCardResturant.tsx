import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import CardResturantDesktop from "./CardResturantDesktop";
import CardResturantMobile from "./CardResturantMobile";

const SectionCardResturant=()=>{
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    return(
        <Grid xs={12} mt={4}>
            {isDesktop ?
                <CardResturantDesktop/> : <CardResturantMobile/>
            }
        </Grid>
    )
}

export default SectionCardResturant;
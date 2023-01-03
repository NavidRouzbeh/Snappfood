import { Grid, useTheme, useMediaQuery } from "@mui/material";
import MobileCard from "./MobileVendorCard";
import DesktopCard from "./DesktopVendorCard";



const VendorCard = () => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    return(
        <Grid>
            {isDesktop? (<DesktopCard/>):(<MobileCard/>)}
        </Grid>
    )

}

export default VendorCard;
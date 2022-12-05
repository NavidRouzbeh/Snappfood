import { Grid, useMediaQuery, useTheme } from "@mui/material";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  const theme=useTheme()
  const isDesktop=useMediaQuery(theme.breakpoints.up('sm'))
    return (
       <Grid>
        {isDesktop?
          <FooterDesktop/>:<FooterMobile/>
        }
       </Grid>
      );
}
 
export default Footer;
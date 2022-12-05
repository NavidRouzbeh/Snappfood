import { Grid, useMediaQuery, useTheme } from "@mui/material";
import FooterDesktop from "./FooterDesktop";

const Footer = () => {
  const theme=useTheme()
  const isDesktop=useMediaQuery(theme.breakpoints.up('sm'))
    return (
       <Grid>
        {isDesktop?
          <FooterDesktop/>:null
        }
       </Grid>
      );
}
 
export default Footer;
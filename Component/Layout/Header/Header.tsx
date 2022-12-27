import { Grid, useMediaQuery, useTheme } from '@mui/material';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';


const Header = () => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    return(
        <Grid xs={12} position={'sticky'}>
            {isDesktop? (<DesktopHeader/>):(<MobileHeader/>)}
        </Grid>
    )

}

export default Header;
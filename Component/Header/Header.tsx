import { useMediaQuery, useTheme } from '@mui/material';
import DesktopHeader from './DesktopHeader';


const Header = () => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return(

        <>
            <DesktopHeader/>
        </>

    )

}

export default Header;
import Image from "next/image";
import { Grid, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import TextField from '@mui/material/TextField';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../Assets/Icons/snappfoodlogo.png";
import SnappLogo from "../../Assets/Icons/snappfood.svg";


const Header = () => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return(
        
        <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{ bgcolor:'#F9FAFB' , width:'100%',height:'4.5rem'}}>
            <Grid item display={'flex'} gap={3} alignItems={'center'} >
                <Grid>
                <Image src={SnappLogo} alt="" style={{width:'68px',height:'34px'}} />
                </Grid>
                <Grid>
                <Typography variant="body2">آدرس</Typography>
                </Grid>
            </Grid>
            <Grid>
            <TextField id="filled-basic" label="جستجو در اسنپ فود" variant="filled" />
            </Grid>
            <Grid>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <ListAltIcon/><Typography variant="h3">سفارش ها</Typography>
                </IconButton>
            </Grid>

        </Grid>
    );
}

export default Header;
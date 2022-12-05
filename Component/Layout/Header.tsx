import Image from "next/image";
import { Grid, Typography, IconButton } from "@mui/material";
import TextField from '@mui/material/TextField';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../Assets/Icons/snappfoodlogo.png";



const Header = () => {
    return(
        <Grid container display={'flex'} alignItems={'center'} sx={{ bgcolor:'#F9FAFB' , width:'100%',height:'4.5rem'}}>
            <Grid item display={'flex'} alignItems={'center'} >
                <Image src={logo} style={{width:'68px',height:'34px'}} />
                <Typography variant="body2">آدرس</Typography>
            </Grid>
            <Grid>
            <TextField id="filled-basic" label="جستجو در اسنپ فود" variant="filled" />
            </Grid>
            <Grid>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <ListAltIcon/>سفارشها
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default Header;
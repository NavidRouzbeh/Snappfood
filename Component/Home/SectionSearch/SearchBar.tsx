import Grid from "@mui/material/Grid";
import StorefrontIcon from '@mui/icons-material/Storefront';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import { useTheme } from "@mui/material";
import TextField  from "@mui/material/TextField";
import Divider  from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import {styled} from "@mui/material";
import NavbarSearch from "./NavbarSearch";
import HeaderSearch from "./HeaderSearch";

const SearchBar =()=>{
    // const theme = useTheme()
    // console.log(parseInt('1.25rem'))
    return(
        <Grid display={'flex'} justifyContent={'center'}>
            <Grid position={'relative'} bgcolor={'#fff'} mt={2} borderRadius={2} border={1} width={{sm:'45vw',md:'29vw'}}>
                <StyledTextField/>
            </Grid>
            <Grid sx={{top:'11%',bgcolor: 'background.paper',boxShadow:2,borderRadius:2}} width={{sm:'45vw',md:'29vw'}} position={'absolute'} height={"fit-content"}>
                {/* <Grid display={'flex'} flexDirection={'column'} bgcolor={'red'} p={'3px'}> */}
                    <HeaderSearch/>
                    <Divider/>
                    <Grid display={'flex'} flexDirection={'column'} p={2}>
                        <NavbarSearch num={2} title={'فروشگاه‌ها'}/>
                        <Grid display={'flex'} xs={8} mt={2} alignItems={'center'}>
                            <StorefrontIcon fontSize="small"/>
                            <Typography mr={2} variant={'subtitle1'} fontSize={'0.8rem'} color={'rgb(58, 61, 66)'}>اکبر جوجه تهرانپارس</Typography>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid display={'flex'} flexDirection={'column'} p={2}>
                        <NavbarSearch num={70} title={'محصولات'}/>
                    </Grid>
                {/* </Grid> */}
            </Grid>
        </Grid>
    )
}

export default SearchBar;






export const StyledTextField = styled(TextField)(({theme}) => ({
    width: '100%',
    background: 'white',
    height: 46,
    borderRadius: '100px',
    'label': {
        ...theme.typography['h1'],
        color: 'red',
        // marginTop: -10,
        // marginLeft: 35
    },

    // 'label.Mui-focused': {
    //     color: 'black',
    //     marginLeft: 0
    // },

    // '& .MuiOutlinedInput-root': {
    //     borderRadius: '100px',
    //     height: 50,
    //     '& fieldset': {
    //         border: 0
    //     },
    //     '&.Mui-focused fieldset': {
    //         border: '1px solid black'
    //     },
    // }

    'fieldset': {
        border: 0
    },
}))


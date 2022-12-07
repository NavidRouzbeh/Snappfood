import Grid from "@mui/material/Grid";
import StorefrontIcon from '@mui/icons-material/Storefront';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { Divider, TextField, Typography, useTheme } from "@mui/material";
import Box from "@mui/system/Box";

const style = {
    top: '10%',
    width: 510,
    // height:300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:2,
  };

const SearchBar =()=>{
    const theme = useTheme()
    return(
        <Grid display={'flex'} justifyContent={'center'}>
            <Grid position={'relative'} bgcolor={'#fff'} mt={2} borderRadius={2} border={1} xs={4}>
                <StyledTextField/>
            </Grid>
            <Box sx={style} position={'absolute'} height={"fit-content"}>
                {/* <Grid display={'flex'} flexDirection={'column'} bgcolor={'red'} p={'3px'}> */}
                    <Grid display={'flex'} p={2} alignItems={'center'}>
                        <GridViewOutlinedIcon fontSize="small"/>
                        <Typography mr={2} variant={'subtitle1'} fontSize={'0.8rem'}>دسته‌بندی</Typography>
                        <Typography mr={'4px'} variant={'subtitle2'} fontSize={'0.8rem'}>جوجه کباب</Typography>
                    </Grid>
                    <Divider/>
                    <Grid display={'flex'} flexDirection={'column'} p={2}>
                        <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                            <Grid>
                                <Typography variant={'subtitle1'} fontSize={'0.8rem'} color={'rgb(58, 61, 66)'}>فروشگاه‌ها</Typography>
                            </Grid>
                            <Grid display={'flex'} alignItems={'center'}>
                                <Typography variant={'subtitle1'} fontSize={'0.8rem'} color={'success.main'}>مشاهده همه (2)</Typography>
                                <KeyboardArrowLeftRoundedIcon color="success"/>
                            </Grid>
                        </Grid>
                        <Grid display={'flex'} xs={6} mt={2} alignItems={'center'}>
                            <StorefrontIcon fontSize="small"/>
                            <Typography mr={'5px'} variant={'subtitle1'} fontSize={'0.8rem'} color={'rgb(58, 61, 66)'}>اکبر جوجه تهرانپارس</Typography>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid display={'flex'} flexDirection={'column'} p={2}>
                        <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                            <Grid>
                                <Typography variant={'subtitle1'} fontSize={'0.8rem'} color={'rgb(58, 61, 66)'}>محصولات</Typography>
                            </Grid>
                            <Grid display={'flex'} alignItems={'center'}>
                                <Typography variant={'subtitle1'} fontSize={'0.8rem'} color={'success.main'}>مشاهده همه (70)</Typography>
                                <KeyboardArrowLeftRoundedIcon color="success"/>
                            </Grid>
                        </Grid>
                    </Grid>
                {/* </Grid> */}

            </Box>
        </Grid>
    )
}

export default SearchBar;



import {styled} from "@mui/material";


export const StyledTextField = styled(TextField)(({theme}) => ({
    width: '100%',
    background: 'white',
    height: 50,
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


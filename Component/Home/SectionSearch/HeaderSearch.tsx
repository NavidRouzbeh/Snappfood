import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const HeaderSearch =()=>{
    return(
        <Grid display={'flex'} p={2} alignItems={'center'}>
            <GridViewOutlinedIcon fontSize="small"/>
            <Typography mr={2} variant={'subtitle1'} fontSize={'0.8rem'}>دسته‌بندی</Typography>
            <Typography mr={'4px'} variant={'subtitle2'} fontSize={'0.8rem'}>جوجه کباب</Typography>
        </Grid>
    )
}

export default HeaderSearch;
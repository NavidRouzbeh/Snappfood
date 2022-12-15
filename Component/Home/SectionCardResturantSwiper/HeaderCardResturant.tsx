import Grid from "@mui/material/Grid/Grid"
import Typography from "@mui/material/Typography/Typography"
import { Cardtitleresturant, CardtitleresturantType } from "../../../Data/CardResturant/CardResturant"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const HeaderCardResturant =({title}:CardtitleresturantType)=>{
    return(
        // <Grid xs={12} m={{xs:2,sm:0}} width={'100%'}>mr={{md:2,sm:0,xs:2}}
            <Grid display={'flex'} alignItems={'center'} width={'95%'} justifyContent={'space-between'} mr={{md:2,sm:0,xs:2}}>
                <Typography variant='h2' fontSize={{xs:'1rem',sm:'1.5rem'}}>{title}</Typography>
                <Grid display={'flex'} alignItems={'center'} sx={{cursor:'pointer'}}>
                    <Typography variant='h3' fontSize={{xs:'0.9rem',sm:'1.5rem'}} color={'success.main'} ml={1}>مشاهده همه </Typography>
                    <ArrowBackIosRoundedIcon color={'success'} sx={{ fontSize:{xs:15,sm:20} }}/>
                </Grid>
            </Grid>
        // </Grid>
    )
}

export default HeaderCardResturant;
import { Grid, Typography } from "@mui/material"
import Image from "next/image";
import pizza from '../Assets/ImageSnapFood/DsCategoryImg/pizza.jpg'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const CategoryCards =()=>{
    return(
        <Grid container item sm={4} md={2}  alignItems={'center'} flexShrink={0}  height={100} bgcolor={'#FFF'} borderRadius={2}>
            <Grid display={'flex'} justifyContent={'center'} alignItems={'flex-end'} sx={{position:'relative'}}>
                {/* <Grid> */}
                    <Image style={{height:90, width:'95%', objectFit:'cover',borderRadius:4}} src={pizza} alt='' />
                {/* </Grid> */}
                <Grid container sx={{position:'absolute',display:{xs:'none',sm:'flex'}}}>
                    <Grid display={'flex'} alignItems={'center'} bgcolor={'white'} p={'3px'} borderRadius={'4px 0 4px 0'} sx={{cursor:'pointer'}}>
                        <Typography>dasteh</Typography>
                        <ArrowBackIosRoundedIcon fontSize="small"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CategoryCards;

// sx={{ display: { xs: "none", md: "contents" } }}
//maxwidth
import { Grid, Typography } from "@mui/material"
import Image from "next/image";
import pizza from '../../../Assets/Images/HomeImages/CategoryImages/pizza.jpg'
import berger from '../../../Assets/Images/HomeImages/CategoryImages/berger.jpg'


import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const categorydata =[
    {id:1,pic:pizza,title:''},
    {id:1,pic:pizza,title:''},
    {id:1,pic:pizza,title:''},
    {id:1,pic:pizza,title:''},
    {id:1,pic:pizza,title:''},
    {id:1,pic:pizza,title:''}
]

const CategoryCards =()=>{
    return(
        <Grid container item xs={4} sm={4} md={1.5} bgcolor={'red'}  alignItems={'center'} flexShrink={0}  height={100} borderRadius={2}>
            <Grid display={'flex'} justifyContent={'center'} alignItems={'flex-end'} sx={{position:'relative'}}>
                {/* <Grid> */}
                    <Image style={{height:90, width:'95%',borderRadius:4,objectFit:'cover'}} src={pizza} alt='' />
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
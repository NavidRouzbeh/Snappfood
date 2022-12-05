import Grid  from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import CategoryCards from "./CategoryCard"

const CategoryContainer =()=>{
    return(
        <Grid xs={11} sx={{direction:'rtl'}} >
            <Grid xs={12}  p={3}>
                <Typography>دسته بندی</Typography>
            </Grid>
            <Grid container bgcolor={'blue'} xs={12} sx={{flexWrap:{xs:'nowrap',sm:'wrap'},overflowX:{xs:'scroll',sm:'hidden'}}} flexShrink={0} justifyContent={'space-around'} >
                <CategoryCards/>
                <CategoryCards/>
                <CategoryCards/>
                <CategoryCards/>
                <CategoryCards/>
                <CategoryCards/>
            </Grid>
        </Grid>
    )
}

export default CategoryContainer
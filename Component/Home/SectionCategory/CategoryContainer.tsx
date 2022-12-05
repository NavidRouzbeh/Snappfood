import Grid  from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import CategoryCards from "./CategoryCard"

import pizza from '../../../Assets/Images/HomeImages/CategoryImages/pizza.jpg'
import berger from '../../../Assets/Images/HomeImages/CategoryImages/berger.jpg'
import sandwitch from '../../../Assets/Images/HomeImages/CategoryImages/sandwitch.jpg'
import sokhary from '../../../Assets/Images/HomeImages/CategoryImages/sokhary.jpg'
import salad from '../../../Assets/Images/HomeImages/CategoryImages/sandwitch.jpg'
import pasta from '../../../Assets/Images/HomeImages/CategoryImages/pasta.jpg'
import { StaticImageData } from "next/image"
import { JsxElement } from "typescript"

const categorydata =[
    {id:1,pic:pizza,title:'پیتزا'},
    {id:1,pic:berger,title:'برگر'},
    {id:1,pic:sandwitch,title:'ساندویچ'},
    {id:1,pic:sokhary,title:'سوخاری'},
    {id:1,pic:salad,title:'سالاد'},
    {id:1,pic:pasta,title:'پاستا'}
]
interface CategoryTypes{
    id:number,
    pic:StaticImageData,
    title:string
}
const CategoryContainer =()=>{
    return(
        <Grid xs={11} sx={{direction:'rtl'}} >
            <Grid xs={12}  p={3}>
                <Typography>دسته بندی</Typography>
            </Grid>
            <Grid container bgcolor={'blue'} xs={12} sx={{flexWrap:{xs:'nowrap',sm:'wrap'},overflowX:{xs:'scroll',sm:'hidden'}}} flexShrink={0} justifyContent={'space-around'} >
                {categorydata.map((item:CategoryTypes)=>(
                    <CategoryCards {...item}/>
                ))}
                {/* <CategoryCards/>
                <CategoryCards/>
                <CategoryCards/>
                <CategoryCards/>
                <CategoryCards/> */}
            </Grid>
        </Grid>
    )
}

export default CategoryContainer
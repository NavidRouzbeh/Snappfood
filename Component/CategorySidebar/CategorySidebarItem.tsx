import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { CategorySidebarType } from "../../Data/CategorySection/CategorySidebar.data";


const CategorySidebarItem = ({ image, title } : CategorySidebarType) => {

    return(

        <Grid>
            <Grid display={'flex'} alignItems={'center'} sx={{py:1.5}}>
                <Image style={{width:'2.5rem', height:'2.5rem'}} src={image} alt="" />
                <Typography variant="subtitle1">{title}</Typography>
            </Grid>
            <Grid></Grid>
        </Grid>

    )

}


export default CategorySidebarItem;
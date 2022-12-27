import SectionPopular from "../../Component/Market/SectionPopular/SectionPopular";
import Cart from '../../Component/Market/Cart/Cart'
import { Grid } from "@mui/material";
import Rec from "../../Component/Market/rectangular/Rec";

const market=()=>{
    return(
        <Grid display={'flex'} pt={10}>
           <Rec/>
           <SectionPopular/>
           <Cart />
        </Grid>
     

    )
}
export default market;
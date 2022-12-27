import SectionPopular from "../../Component/Market/SectionPopular/SectionPopular";

import Cart from '../../Component/Market/Cart/Cart'
import { Grid } from "@mui/material";
import Rec from "../../Component/Market/rectangular/Rec";

import Comment from "../../Component/Market/Comment/Comment";
import CommentDes from "../../Component/Market/Comment/CommentDes";

const market=()=>{
    return(
        <Grid display={'flex'} pt={10} container>
           <Rec/>
           <SectionPopular/>
           <Cart />
           {/* <Comment  />
          <CommentDes/> */}
        </Grid>
     



    )
}
export default market;
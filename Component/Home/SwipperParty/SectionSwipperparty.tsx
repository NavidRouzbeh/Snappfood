import Grid from "@mui/material/Grid"
import CardParty from "./CardParty";

const SectionSwipperParty = () => {
    return ( 
        <Grid container style={{"backgroundImage":'radial-gradient(100% 100% at 0% 0%, rgb(252, 95, 153) 0%, rgb(225, 36, 146) 100%)'}} borderRadius={"0.25rem 0.25rem 7.5rem "} pb={10} sx={{ width: { xs: "99%", lg: "90%" }, display: { sm: "flex", xs: "none" } }} mt={13} display={"flex"} justifyContent={"space-around"}>
              <CardParty/>
         </Grid>
     );
}
 
export default SectionSwipperParty;
import Grid from "@mui/material/Grid"
import CardParty from "./CardPartyDesktop";
import SwipperContainer from "./SwipperContainer";
import TimerSwipperParty from "./TimerSwipperParty";

const SectionSwipperParty = () => {
    return ( 
        <Grid container style={{"backgroundImage":'radial-gradient(100% 100% at 0% 0%, rgb(252, 95, 153) 0%, rgb(225, 36, 146) 100%)'}} borderRadius={"0.25rem 0.25rem 7.5rem "} p={3} sx={{ width: { xs: "99%", lg: "90%" }, display: { xs: "none",sm:'flex' } }} mt={13} display={"flex"} >
              <TimerSwipperParty />
              <Grid xs={9} item>
                <SwipperContainer/>
              </Grid>
              
         </Grid>
     );
}
 
export default SectionSwipperParty;
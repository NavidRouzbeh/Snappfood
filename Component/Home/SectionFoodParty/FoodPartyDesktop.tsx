import Grid from "@mui/material/Grid"
import SwipperContainer from "./SwipperContainer";
import TimerFoodPartyDesktop from "./TimerFoodPartyDesktop";

const FoodPartyDesktop = () => {
    return ( 
        <Grid container style={{"backgroundImage":'radial-gradient(100% 100% at 0% 0%, rgb(252, 95, 153) 0%, rgb(225, 36, 146) 100%)'}} borderRadius={"0.25rem 0.25rem 7.5rem "} p={3} sx={{ width: { xs: "99%", lg: "90%" }, display: { xs: "none",sm:'flex' } }}  display={"flex"} >
              <TimerFoodPartyDesktop />
              <Grid xs={9} item>
                <SwipperContainer/>
              </Grid>
              
         </Grid>
     );
}
 
export default FoodPartyDesktop;
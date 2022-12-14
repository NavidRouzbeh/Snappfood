import Grid from "@mui/material/Grid";
import NavbarSection from "../Component/Home/NavbarSection/NavbarSection";
import RegistrationSeller from "../Component/Home/RegistrationSeller";
import SectionApp from "../Component/Home/SectionApp";
import CategoryContainer from "../Component/Home/SectionCategory/CategoryContainer";
import SectionCities from "../Component/Home/SectionCities";
import Cart from "../Component/Cart/Cart";
import SectionFoodParty from "../Component/Home/SectionFoodParty/SectionFoodParty";

export default function Home() {
  return (

    <Cart />
    // <>
    //   <NavbarSection />
    //   <Grid
    //     container
    //     xs={12}
    //     display={"flex"}
    //     justifyContent={"center"}
    //     alignItems={"center"}
    //   >
    //     <CategoryContainer /> 
    //     <SectionFoodParty/>
    //     <SectionApp />
    //     <RegistrationSeller />
    //     <SectionCities />
    //   </Grid>
    // </>
  );
}

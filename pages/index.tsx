import Grid from "@mui/material/Grid";
import NavbarSection from "../Component/Home/NavbarSection/NavbarSection";
import RegistrationSeller from "../Component/Home/RegistrationSeller";
import SectionApp from "../Component/Home/SectionApp";
import CategoryContainer from "../Component/Home/SectionCategory/CategoryContainer";
import SectionCities from "../Component/Home/SectionCities";
import CardParty from "../Component/Home/SwipperParty/CardParty";
import SectionSwipperParty from "../Component/Home/SwipperParty/SectionSwipperparty";
export default function Home() {
  return (
    <>
      <NavbarSection />

      <Grid
        container
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SectionSwipperParty/>
        <CategoryContainer />

        <SectionApp />
        <RegistrationSeller />
        <SectionCities />
      </Grid>
    </>
  );
}

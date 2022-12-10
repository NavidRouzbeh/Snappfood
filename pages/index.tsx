import Grid from "@mui/material/Grid";
import NavbarSection from "../Component/Home/NavbarSection/NavbarSection";
import RegistrationSeller from "../Component/Home/RegistrationSeller";
import SectionApp from "../Component/Home/SectionApp";
import CategoryContainer from "../Component/Home/SectionCategory/CategoryContainer";
import SectionCities from "../Component/Home/SectionCities";

import CardParty from "../Component/Home/SwipperPartySection/CardPartyDesktop";
import CardPartyMobile from "../Component/Home/SwipperPartySection/CardPartyMobile";
import SwipperContainer from "../Component/Home/SwipperPartySection/SwipperContainer";
import SectionSwipperParty from "../Component/Home/SwipperPartySection/SwipperpartySection";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <CardPartyMobile/>
      <Grid
        container
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CategoryContainer />
        <SectionSwipperParty/>
        <SectionApp />
        <RegistrationSeller />
        <SectionCities />
      </Grid>
    </>
  );
}

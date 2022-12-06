import Grid from '@mui/material/Grid'
import NavbarSection from '../Component/Home/NavbarSection/NavbarSection'
import RegistrationSeller from '../Component/Home/RegistrationSeller'
import SectionApp from '../Component/Home/SectionApp'
import SectionCities from '../Component/Home/SectionCities'
export default function Home() {
     return (

          <Grid container xs={12} display={'flex'} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
               <NavbarSection />
               <SectionApp />
               <RegistrationSeller />
               <SectionCities />
          </Grid>



     )
}

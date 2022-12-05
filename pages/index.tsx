import Grid  from '@mui/material/Grid'
import RegistrationSeller from '../Component/Home/RegistrationSeller'
import SectionApp from '../Component/Home/SectionApp'
import SectionCities from '../Component/Home/SectionCities'
export default function Home() {
  return (
     <Grid container   xs={12}  display={'flex'} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <SectionApp/>
      <RegistrationSeller/>
      <SectionCities/>
     </Grid>

  )
}

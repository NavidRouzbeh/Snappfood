import Grid  from '@mui/material/Grid'
import RegistrationSeller from '../Component/Home/RegistrationSeller'
import SectionApp from '../Component/Home/SectionApp'
import SectionCities from '../Component/Home/SectionCities'
import CardParty from '../Component/Home/SwipperParty/CardParty'
export default function Home() {
  return (

     <Grid container xs={12}  display={'flex'} justifyContent={"center"} alignItems={"center"}>
     

      <SectionApp/>
      <RegistrationSeller/>
      <SectionCities/>
     </Grid>



  )
}

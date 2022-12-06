import Grid  from '@mui/material/Grid'
import RegistrationSeller from '../Component/Home/RegistrationSeller'
import SectionApp from '../Component/Home/SectionApp'
import CategoryContainer from '../Component/Home/SectionCategory/CategoryContainer'
import SectionCities from '../Component/Home/SectionCities'
export default function Home() {
  return (

     <Grid container   xs={12}  display={'flex'} justifyContent={"center"} alignItems={"center"}>
      <CategoryContainer/>
      <SectionApp/>
      <RegistrationSeller/>
      <SectionCities/>
     </Grid>



  )
}

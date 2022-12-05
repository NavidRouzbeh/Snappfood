import Grid  from '@mui/material/Grid'
import RegistrationSeller from '../Component/Home/RegistrationSeller'
import SectionApp from '../Component/Home/SectionApp'
export default function Home() {
  return (
     <Grid container   xs={12} bgcolor={"red"} display={'flex'} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <SectionApp/>
      <RegistrationSeller/>
     </Grid>

  )
}

import Grid  from '@mui/material/Grid'
import SectionApp from '../Component/Home/SectionApp'
export default function Home() {
  return (
     <Grid container   xs={12} bgcolor={"red"} display={'flex'} justifyContent={"center"} alignItems={"center"}>
      <SectionApp/>
     </Grid>

  )
}

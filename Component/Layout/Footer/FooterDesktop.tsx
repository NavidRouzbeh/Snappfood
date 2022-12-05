import { Grid } from "@mui/material";

const FooterDesktop = () => {
    return (
        <Grid bgcolor={'rgb(249, 250, 251)'} width={'100%'} height={300} position={'absolute'} bottom={0}>
            <Grid container display={'flex'}  >
                <Grid item md={4} xs={6} >llll</Grid>
                <Grid item md={4} xs={6}>ppp</Grid>
                <Grid item md={4} xs={6}>rrrr</Grid>
                <Grid item md={4} xs={6}>nnnn</Grid>
            </Grid>
        </Grid>
      );
}
 
export default FooterDesktop;
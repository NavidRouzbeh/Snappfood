import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Image from "next/image";
import Background from "../../Assets/Images/shila.jpg"
const MobileVendorCard = () => {

    return(

        <Card  sx={{
            width:'20rem',
            height:'15.5rem',
            borderRadius:'0.4rem'
        }}>

            <Grid sx={{
                width:'100%',
                height:'40%'
            }}>
                <Image style={{ width:'100%', height:'100%', objectFit:'cover'}} src={Background} alt='' />
            </Grid>

            <Grid>
                
            </Grid>

        </Card>

    )

}

export default MobileVendorCard;
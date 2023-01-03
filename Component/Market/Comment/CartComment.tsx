import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Image from "next/image";
import Background from "../../../Assets/Images/sun.jpeg"
import Logo from "../../../Assets/Images/pz.jpeg"
import { Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import CommentDes from "../Comment/CommentDes"

export interface MenuBarProps {
    state: boolean,
   
  }

const CartComment = ({state}:MenuBarProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <Grid sx={{
            width: '100%',
            height: '15.5rem',
            position: 'relative',
            display:{sm:"none"}
            // bgcolor: "red"
        }}>
            <Grid sx={{
                width: '100%',
                height: '50%',
            }}>
                <Image style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={Background} alt='Background' />
            </Grid>
            <Grid sx={{ width: '100%', position: "fixed" }} >
                <Grid sx={{ position: 'absolute', left: 230, top: -60 }} borderRadius={2}>
                    <Image src={Logo} alt="" style={{
                        width: '4.5rem',
                        height: '4.5rem',
                        border: '1px solid rgba(58, 61, 66, 0.06)',
                        borderRadius: '0.75rem',
                    }} />
                </Grid>
                <Grid p={2} display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="subtitle1" sx={{ color: 'black' }}>{"کترینگ صدرسان (فاطمی)"}</Typography>
                    <Typography variant="subtitle1"><FavoriteBorderIcon /></Typography>
                </Grid>
                <Grid display={"flex"} bgcolor={"blue"} flexDirection={"column"}  justifyContent={"flex-start"} onClick={handleOpen} >          
                   <InfoIcon style={{color:"green" , fontSize:"15px" , marginRight:"30px"}} />
                   <Typography variant="subtitle1"  fontSize={'12px'} color={"green"} >{"اطلاعات بیشتر"}</Typography>
    
                <CommentDes open={open} setOpen={setOpen}/>
                
                </Grid>
                
            </Grid>

        </Grid>

    )

}

export default CartComment;
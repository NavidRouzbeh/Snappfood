import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import pic from "../../../Assets/Images/sun.jpeg"
import ModalComment from './ModalComment'
import StarIcon from "@mui/icons-material/Star";
import CartComment from './CartComment'

const Comment = () => {
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(!open);
    // const handleClose = () => setOpen(!open);
    return (
       <>
        <Grid item xs={12} display={{sm:"flex" , xs:"none"}} top={1200} flexDirection={"column"} dir={"rtl"} >
            <Grid item xs={12} display={"flex"}>
                <Grid xs={4} >
                    <Image src={pic} alt="" style={{ border: "1px solid rgba(58, 61, 66, 0.06)", borderRadius: "0.75rem", width: "5.5rem", height: "5.5rem" }} />
                </Grid>
                <Grid item xs={8} mr={1} >
                    <Grid height={"3.5rem"} item xs={12} display={"flex"} justifyContent={"space-between"} alignItems={"center"} justifyItems={"center"}>
                        <Grid item xs={12} display={"flex"} gap={1}>
                        <Typography  justifyContent={"center"} alignItems={"center"} display={"flex"} ><StarIcon sx={{ color: "#FFCE00", width: "18px" }} />4.3</Typography>
                            
                            <Typography>(1600 نظر)</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>(%35)</Typography>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} >
                        <Typography>تله پیتزا ( چهارراه ولیعصر )</Typography>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={12} mt={1} onClick={handleOpen} >
                <ModalComment open={open}  setOpen={setOpen}/>
                <Button sx={{width: "26%"}}>
                    <Typography color={"rgb(0, 184, 98)"}>مشاهده نظرات</Typography></Button>
            </Grid>
        </Grid>
        

        <CartComment state={false}/>
        </>
       
      
    )
}

export default Comment
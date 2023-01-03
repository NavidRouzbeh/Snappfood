import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import pic from "../../../assets/images/food.jpg"
import RoomIcon from '@mui/icons-material/Room';
import loc from "../../../assets/images/loction.png"
const CommentInformation = () => {
    return (
        <>
            <Grid display={"flex"} dir={"rtl"} mt={2} flexDirection={"column"}>
                <Grid display={"flex"} width={"100%"} borderBottom={"1px solid #f4f3f3"} justifyContent={"space-between"} pb={2}>
                    <Grid display={"flex"} flexDirection={"column"} width={"70%"}  >
                        <Typography mb={2}>{"پیتزا شیلا (میدان ولیعصر)"}</Typography>
                        <Grid display={"flex"} gap={4}>
                            <Typography>{"نوع محصول :"}</Typography>
                            <Typography>{"فست فود ,  برگر , ساندویچ"}</Typography>
                        </Grid>
                        <Grid display={"flex"} gap={3}>
                            <Typography>{"حداقل سبد خرید:"}</Typography>
                            <Typography>{"4000 تومان "}</Typography>
                        </Grid>
                        <Grid display={"flex"} gap={4}>
                            <Typography>{"روش پرداخت: "}</Typography>
                            <Typography>{"آنلاین"}</Typography>
                        </Grid>


                    </Grid>
                    <Grid display={"flex"} width={"30%"} justifyContent={"flex-end"} >
                        <Image src={pic} alt="" style={{ border: "1px solid rgba(58, 61, 66, 0.06)", borderRadius: "8px", width: "5.5rem", height: "5.5rem" }} />
                    </Grid>
                </Grid>
                <Grid display={"flex"} width={"100%"}>
                <Grid display={"flex"} width={"60%"} dir={"rtl"} mt={2} gap={2}>
                    <RoomIcon />
                    <Typography>
                        {"ضلع جنوب شرقی میدان ولیعصر، نبش کوچه شقایق، پلاک ۴۶، پیتزا شیلا (میدان ولی عصر)"}
                    </Typography>
                </Grid>
                <Grid display={"flex"} width={"40%"} justifyContent={"flex-end"} mt={2} >
                    <Image src={loc} alt="" style={{ border: "1px solid rgba(58, 61, 66, 0.06)", borderRadius: "8px", width: "6.5rem", height: "6.5rem" }} />
                </Grid>
                </Grid>
                
            </Grid>


        </>
    )
}

export default CommentInformation
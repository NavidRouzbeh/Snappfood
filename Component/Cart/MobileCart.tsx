import { Grid, IconButton, Typography, Divider, Button } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Delete from '../../Assets/Icons/Delete.svg';
import pizza from '../../Assets/Images/pizza2.jpg';
import add from '../../Assets/Icons/Add.svg';
import remove from '../../Assets/Icons/remove.svg';

const MobileCart = () => {

    return(
        <Grid display={'flex'} flexDirection={'column'} justifyContent={'space-between'}
        sx={{
            height:'1055px',
            bgcolor:'white',
            borderRadius:'0.5rem',
            py:1 ,
            px:1.5
        }} >
            <Grid
            display={'flex'}
            flexDirection={'column'}
            alignItems='center'
            justifyContent={'space-between'}
            gap={1.5}
            >
                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{width:'100%'}}>
                    <IconButton><ChevronRightRoundedIcon/></IconButton>
                    <Typography variant="subtitle1">سبد خرید</Typography>
                    <IconButton>
                        <Image src={Delete} alt='' />
                    </IconButton>
                </Grid>
                <Grid display={'flex'} flexDirection={'column'} gap={1.5} sx={{width:'100%'}}>
                    <Grid display={'flex'} alignItems={'center'} gap={1.5}>
                        <Image src={pizza} alt='' style={{width:'56px', height:'56px'}} />
                        <Typography variant="subtitle2">پیتزا</Typography>
                    </Grid>
                    <Grid display={'flex'} justifyContent={'space-between'} >
                        <Grid>
                            <Typography variant="subtitle1">۱۶۶,۰۰۰ تومان</Typography>
                        </Grid>
                        <Grid display={'flex'} alignItems={'center'} gap={2}>
                            <Grid
                            sx={{
                                width:'32px',
                                height:'32px',
                                border:'1px solid #ff00a4',
                                borderRadius:'6px',
                                bgcolor:'#ff00a4'
                            }}
                            >
                                <IconButton sx={{width:'100%', height:'100%'}}>
                                    <Image src={add} alt='' />
                                </IconButton>
                            </Grid>
                            <Typography variant="subtitle2">1</Typography>
                            <Grid
                            sx={{
                                width:'32px',
                                height:'32px',
                                border:'1px solid black',
                                borderRadius:'6px'
                            }}
                            >
                                <IconButton sx={{width:'100%', height:'100%'}}>
                                    <Image src={remove} alt='' />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider sx={{color:'black', width:'97%'}}/>
                <Grid display={'flex'} flexDirection={'column'} gap={1} sx={{width:'100%', mt:4}}>
                    <Typography variant="subtitle2">توضیحات</Typography>
                    <Typography variant="subtitle1">توضیحات سفارش خود را اینجا بنویسید</Typography>
                </Grid>
                <Divider sx={{color:'black', width:'97%'}}/>
                <Grid display={'flex'} justifyContent={'space-between'} sx={{width:'100%', mt:4}}>
                        <Typography variant="subtitle1"> جمع سفارش </Typography>
                        <Typography variant="subtitle1"> ۱۶۶,۰۰۰ تومان</Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'space-between'} sx={{width:'100%'}}>
                        <Typography variant="subtitle1"> مالیات </Typography>
                        <Typography variant="subtitle1"> ۱۴,۹۴۰ تومان</Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'space-between'} sx={{width:'100%'}}>
                        <Typography variant="subtitle1"> هزینه ارسال</Typography>
                        <Typography variant="subtitle1"> ۷,۵۰۰ تومان</Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'space-between'} sx={{width:'100%'}}>
                        <Typography variant="subtitle1"> مبلغ قابل پرداخت</Typography>
                        <Typography variant="subtitle1"> ۱۸۸,۴۴۰ تومان</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Grid display={'flex'} flexDirection={'column'} sx={{width:'100%'}}>
                        <Divider sx={{color:'black', width:'97%'}}/>
                        <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{width:'100%', px:4}}>
                            <Grid >
                                <Typography variant="subtitle1">جمع کل</Typography>
                                <Typography variant="subtitle1">۱۸۸,۴۴۰ تومان</Typography>
                            </Grid>
                            <Button sx={{my:2}}><Typography>ثبت سفارش</Typography></Button>
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default MobileCart
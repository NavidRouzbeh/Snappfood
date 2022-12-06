import Image from "next/image";
import { Grid, Typography, IconButton, useMediaQuery, useTheme, Button, Modal, Box } from "@mui/material";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import SnappLogo from "../../../Assets/Icons/snappfood.svg";
import LocationIcon from "../../Assets/Icons/LocationIcon.svg";
import ProfileIcon from "../../../Assets/Icons/ProfileIcon.svg"
import { useState } from "react";
import ProfileDesktop from "../../Home/SectionProfile/ProfileDesktop";


const DesktopHeader = () => {
    const [showprofile,setShowProfile]=useState<boolean>(false)
    const [open,setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(
        
        <Grid container boxSizing={'border-box'} justifyContent={'space-between'} alignItems={'center'} sx={{ bgcolor:'#F9FAFB' , width:'100%', height:'4.5rem', p:'1rem'}}>
            <Grid item display={'flex'} gap={3} alignItems={'center'} >
                <Grid>
                <Image src={SnappLogo} alt="" style={{width:'68px',height:'34px'}} />
                </Grid>
                <Grid>
                <Typography variant="body2"> <Image src={ProfileIcon} alt=""/>تهران، محله سعادت آباد، بلوار جوریکی،نبش کوچه نهم غربی</Typography>
                </Grid>
            </Grid>
            <Grid display={{sm:'none', md:"flex"}}>
                <Button onClick={handleOpen}
                style={{ color:'rgb(166, 170, 173)', backgroundColor:'rgb(235, 237, 240)', width: '29vw', height: '3rem', borderRadius: '0.625rem' }}>
                    <SearchIcon/>
                    جست‌وجو در اسنپ‌فود
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box >
                    <Typography>
                        search
                    </Typography>
                    </Box>
                </Modal>
            {/* <TextField id="filled-basic" label="جستجو در اسنپ فود" variant="filled" /> */}
            </Grid>
            <Grid display={{sm:'none', md:'flex'}} gap={4}>
                <Grid position={'relative'}>
                <IconButton onClick={()=>setShowProfile(!showprofile)}>
                    {showprofile ? <ProfileDesktop/> : null}
                    <PersonOutlinedIcon/>
                </IconButton>
                </Grid>
                <Grid>
                <IconButton>
                    <ListAltIcon/><Typography color={'rgb(58, 61, 66)'} fontSize={'0.875rem'} fontWeight={700} >سفارش‌ها</Typography>
                </IconButton>
                </Grid>
            </Grid>

            <Grid display={{sm:'flex', md:'none'}} gap={2}>
                <Grid>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                </Grid>
                <Grid position={'relative'}>
                <IconButton onClick={()=>setShowProfile(!showprofile)}>
                    {showprofile ? <ProfileDesktop/> : null}
                    <PersonOutlinedIcon/>
                </IconButton>
                </Grid>
                <Grid>
                <IconButton>
                    <ListAltIcon/><Typography color={'rgb(58, 61, 66)'} fontSize={'0.875rem'} fontWeight={700} ></Typography>
                </IconButton>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default DesktopHeader;
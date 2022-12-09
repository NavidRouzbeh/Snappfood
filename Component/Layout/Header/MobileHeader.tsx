import { Grid, IconButton, Typography, Modal, Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import HamMenu from "../../../Assets/Icons/HamMenuIcon.svg";
import AddressArrow from "../../../Assets/Icons/AddressArrowIcon.svg";
import Cart from "../../../Assets/Icons/CartIcon.svg";
import { useState } from "react";


const MobileHeader = () => {

    const [openSearchBar,setOpenSearchBar] = useState(false);
    const handleOpen = () => setOpenSearchBar(true);
    const handleClose = () => setOpenSearchBar(false);

    return(
        <Grid>
            <Grid item display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{ bgcolor:'#F9FAFB', height:'50px', width:'100%'}}>
                <Grid>
                    <IconButton>
                        <Image src={HamMenu} alt="" />
                    </IconButton>
                </Grid>
                <Grid>
                    <Grid item display={'flex'} gap={1} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant="subtitle1" sx={{color:'black'}}>
                        موقعیت انتخابی
                        </Typography>
                        <Image src={AddressArrow} alt="" />
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1" sx={{color:'black'}}>
                            تهران،سعادت آباد، بلوار ...
                        </Typography>
                    </Grid>
                </Grid>
                <Grid>
                <IconButton>
                        <Image src={Cart} alt="" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item  >
                <Grid>
                <Button onClick={handleOpen}
                sx={{ justifyContent:'space-between', color:'rgb(166, 170, 173)', backgroundColor:'rgb(235, 237, 240)', width: '90%', height: '3rem', borderRadius: '0.625rem' }}>
                    <Grid>جست‌وجو در اسنپ‌فود</Grid>
                    <Grid>
                        <SearchIcon/>
                    </Grid>
                </Button>
                <Modal
                open={openSearchBar}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Grid >
                        <Typography>
                            search
                        </Typography>
                    </Grid>
                </Modal>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default MobileHeader;
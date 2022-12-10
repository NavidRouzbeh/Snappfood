import { Grid, IconButton, Typography, Modal, Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import HamMenu from "../../../Assets/Icons/HamMenuIcon.svg";
import AddressArrow from "../../../Assets/Icons/AddressArrowIcon.svg";
import Cart from "../../../Assets/Icons/CartIcon.svg";
import { useState } from "react";


const MobileHeader = () => {

    const [openSearchBar,setOpenSearchBar] = useState(false);
    const handleOpenSearch = () => setOpenSearchBar(true);
    const handleCloseSearch = () => setOpenSearchBar(false);

    const [openHamMenu,setOpenHamMenu] = useState(false);
    const handleOpenHamMenu = () => setOpenHamMenu (true);
    const handleCloseHamMenu = () => setOpenHamMenu (false);
    return(
        <Grid>
            <Grid item display={'flex'} alignItems={'top'} justifyContent={'space-between'} sx={{ bgcolor:'#F9FAFB', height:'50px', width:'100%', pt:0.5, px:1.5}}>
                <Grid>
                    <IconButton onClick={handleOpenHamMenu}>
                        <Image src={HamMenu} alt="" />
                    </IconButton>
                    <Modal
                    open={openHamMenu}
                    onClose={handleCloseHamMenu}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                        <Grid sx={{width:'100%', height:'100%', bgColor:'white' }}>
                            <Grid>
                                <Typography>poshtibani</Typography>
                            </Grid>
                            <Grid>
                                <Typography>poshtibani</Typography>
                            </Grid>
                            <Grid>
                                <Typography>poshtibani</Typography>
                            </Grid>
                        </Grid>
                    </Modal>
                </Grid>
                <Grid>
                    <Grid display={'flex'} gap={1} sx={{alignItems:'center', justifyContent:'center', mt:0.5}}>
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
            <Grid>
                <Grid display={'flex'} sx={{bgcolor:'#F9FAFB', justifyContent:'center'}}>
                    <Button onClick={handleOpenSearch}
                    sx={{ justifyContent:'space-between', color:'rgb(166, 170, 173)', backgroundColor:'rgb(235, 237, 240)', width: '90%', height: '3rem', borderRadius: '0.625rem', my:1 }}>
                        <Typography sx={{ fontSize:12, pr:1}}>جستجو در اسنپ‌فود </Typography>
                        <Grid>
                            <SearchIcon/>
                        </Grid>
                    </Button>
                    <Modal
                    open={openSearchBar}
                    onClose={handleCloseSearch}
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
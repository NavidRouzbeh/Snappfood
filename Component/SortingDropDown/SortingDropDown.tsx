import { Grid, Button, Menu, MenuItem, Divider, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import DownArrow from '../../Assets/Icons/DownArrow.svg';



const SortingDropDown = () => {

    const [showMenu, setShowMenu] = useState(false)
    
    const handleClick = () => setShowMenu(true)

    const handleClose = () => {
        setSortSelector("به ترتیب پیش فرض"),
        setShowMenu(false)
    }
    
    const [sortSelector, setSortSelector] = useState("به ترتیب پیش فرض");

    

    return(

        <Grid sx={{
            width:'12.5rem', 
            height:'3.3rem', 
            bgcolor:'white', 
            borderRadius: 1,
            border: '1px solid rgba(58, 61, 66, 0.06)'

        }}>
            <Button
                id="basic-button"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                    width:'100%',
                    height:'100%'
                }}
            >
                <Grid container sx={{alignItems:'center', justifyContent:'space-between'}}>
                    <Grid>
                            <Typography variant="subtitle2">
                                {sortSelector}
                            </Typography>
                        </Grid>
                    <Grid display={'flex'} sx={{alignItems:'center'}}>
                        <Divider orientation="vertical" sx={{height:30, ml:1.5}} />
                        <Image src={DownArrow} alt="" />
                    </Grid>
                </Grid>
            </Button>
            <Menu
                id="basic-menu"
                open={showMenu}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {setSortSelector("profile"),setShowMenu(false)}}>Profile</MenuItem>
                <MenuItem onClick={() => {setSortSelector("profile2"),setShowMenu(false)}}>My account</MenuItem>
                <MenuItem onClick={() => {setSortSelector("profile4"),setShowMenu(false)}}>Logout</MenuItem>
            </Menu>
        </Grid>
    )

}

export default SortingDropDown;
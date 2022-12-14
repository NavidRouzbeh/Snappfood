import { Grid, Button, Menu, MenuItem, Divider } from "@mui/material";
import { useState } from "react";



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
                <Grid container>
                    <Grid>{sortSelector}</Grid>
                    <Divider orientation="vertical" sx={{height:30}} />
                    <Grid></Grid>
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
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
// import { useNavigate } from 'react-router-dom';
import Image from "next/image";
import Home from './Home.svg'
import Modal from '@mui/material/Modal';
import ProfileMobile from "../../Home/SectionProfile/ProfileMobile";

const FooterMobile= () => {
  const [value, setValue] = React.useState(0);
  const [openprofile,setOpenProfile] =React.useState(false)
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile =() =>setOpenProfile(false);
  // const navigate=useNavigate()
  // const handleChangePageCurrent=()=>{
  //     navigate('/CurrentPrice')
  // }
  // const handleChangePageHome=()=>{
  //     navigate('/')
  // }
  return (
    <Box sx={{ width: "100%" }} position={"fixed"} zIndex={12000} bottom={0} boxShadow={'0 -1px 0  rgba(0, 0, 0, 0.1)'}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="خانه"
          value={"1"}
          icon={<HomeIcon />}
          //icon={<Image src={Home} alt={''}/>}
        //   onClick={handleChangePageHome}
          onClick={handleCloseProfile}
        />
        <BottomNavigationAction
          label="  سفارش ها"
          value={"2"}
          icon={<ListAltIcon />}
        //   onClick={handleChangePageCurrent}
        />
        <BottomNavigationAction
          label="حساب من"
          value={"3"}
          icon={<PermIdentitySharpIcon />}
        //   onClick={handleChangePageCurrent}
        onClick={handleOpenProfile}
        />
        <Modal
        open={openprofile}
        // onClose={handleClose}
        >
          <ProfileMobile/>
        </Modal>
      </BottomNavigation>
    </Box>
  );
};
export default FooterMobile;

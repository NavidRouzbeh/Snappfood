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

const FooterMobile= () => {
  const [value, setValue] = React.useState(0);
  // const navigate=useNavigate()
  // const handleChangePageCurrent=()=>{
  //     navigate('/CurrentPrice')
  // }
  // const handleChangePageHome=()=>{
  //     navigate('/')
  // }
  return (
    <Box sx={{ width: "100%",zIndex:1000}} position={"fixed"} bottom={0} boxShadow={'0 -1px 0  rgba(0, 0, 0, 0.1)'} >
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
        />
      </BottomNavigation>
    </Box>
  );
};
export default FooterMobile;

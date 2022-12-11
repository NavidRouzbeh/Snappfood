import Grid from "@mui/material/Grid";
import StorefrontIcon from '@mui/icons-material/Storefront';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Divider  from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import NavbarSearch from "./NavbarSearch";
import HeaderSearch from "./HeaderSearch";
import ProductDetailCardSearch from "./ProductDetailCardSearch";
import { useState } from "react";
import { StyledTextField } from "../../../Styled/StyledTextField";

const SearchBar =()=>{
    // const theme = useTheme()
    const [valueSearch,setValueSearch]=useState('')
    const handleInputSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValueSearch(e.target.value)
    }
    return(
        <Grid display={'flex'} justifyContent={'center'}>
            <Grid position={'relative'} mt={2} width={{xs:'90%',sm:'45vw',md:'29vw'}}>
                <StyledTextField 
                    onChange={handleInputSearch}
                    InputProps={{
                    startAdornment: (
                    <InputAdornment position={'start'}>
                        <SearchOutlinedIcon />
                    </InputAdornment>
                    ),
                }}/>
            </Grid>
            {(()=>{
            if(valueSearch===''){
                return(
                    <Grid display={{xs:'none',sm:'flex'}} width={{xs:'90%',sm:'45vw',md:'29vw'}} p={2} borderRadius={2} position={'absolute'} bgcolor={'white'} top={{xs:'20%',sm:'12%',md:'11%'}}>
                        <Typography variant="subtitle1" color={'rgb(83, 86, 92)'}>عبارت مورد نظر خود را وارد کنید</Typography>
                    </Grid>
                )
                
            }else if(valueSearch.length<=2){
                return(
                    <Grid display={{xs:'none',sm:'flex'}} width={{xs:'90%',sm:'45vw',md:'29vw'}} position={'absolute'} bgcolor={'white'} top={{xs:'20%',sm:'12%',md:'11%'}}  p={2} borderRadius={2}>
                        <Typography ml={0.5} variant="subtitle2" fontWeight={300} fontSize={'0.87rem'}>جستجوی</Typography>
                        <Typography variant="subtitle2" fontSize={'0.87rem'}>{valueSearch.valueOf()}</Typography>
                    </Grid>
                )
            }else{
                return(
                <Grid sx={{bgcolor: 'background.paper',boxShadow:2,borderRadius:2}} top={{xs:'20%',sm:'12%',md:'11%'}} width={{xs:'95%',sm:'45vw',md:'29vw'}} position={'absolute'} height={"fit-content"}>
                    <HeaderSearch/>
                    <Divider/>
                    <Grid display={'flex'} flexDirection={'column'} p={2}>
                        <NavbarSearch num={2} title={'فروشگاه‌ها'}/>
                        <Grid display={'flex'} xs={8} my={2} alignItems={'center'}>
                            <StorefrontIcon fontSize="small"/>
                            <Typography mr={2} variant={'subtitle1'} fontSize={'0.8rem'} color={'rgb(58, 61, 66)'}>اکبر جوجه تهرانپارس</Typography>
                        </Grid>
                        {/* <Divider/>
                        <Grid display={'flex'} xs={8} mt={2} alignItems={'center'}>
                            <StorefrontIcon fontSize="small"/>
                            <Typography mr={2} variant={'subtitle1'} fontSize={'0.8rem'} color={'rgb(58, 61, 66)'}>اکبر جوجه تهرانپارس</Typography>
                        </Grid> */}
                    </Grid>
                    <Divider/>
                    <Grid display={'flex'} flexDirection={'column'} p={2}>
                        <NavbarSearch num={70} title={'محصولات'}/>
                        <ProductDetailCardSearch/>
                    </Grid>
                </Grid>
                )
            }
            })()}
            
        </Grid>
    )
}

export default SearchBar;


import Grid from "@mui/material/Grid";
import StorefrontIcon from '@mui/icons-material/Storefront';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { TextField, useTheme } from "@mui/material";
const SearchBar =()=>{
    const theme = useTheme()
    return(
        <Grid display={'flex'} justifyContent={'center'}>
            <Grid bgcolor={'#fff'} mt={2} borderRadius={2} border={1} xs={3}>
                <StyledTextField   />
            </Grid>
        </Grid>
    )
}

export default SearchBar;



import {styled} from "@mui/material";


export const StyledTextField = styled(TextField)(({theme}) => ({
    width: '100%',
    background: 'white',
    height: 50,
    borderRadius: '100px',
    'label': {
        ...theme.typography['h1'],
        color: 'red',
        // marginTop: -10,
        // marginLeft: 35
    },

    // 'label.Mui-focused': {
    //     color: 'black',
    //     marginLeft: 0
    // },

    // '& .MuiOutlinedInput-root': {
    //     borderRadius: '100px',
    //     height: 50,
    //     '& fieldset': {
    //         border: 0
    //     },
    //     '&.Mui-focused fieldset': {
    //         border: '1px solid black'
    //     },
    // }

    'fieldset': {
        border: 0
    },
}))


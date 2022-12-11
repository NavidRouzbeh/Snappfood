import {styled} from "@mui/material";
import TextField  from "@mui/material/TextField";

export const StyledTextField = styled(TextField)(({theme}) => ({
    width: '100%',
    background: 'white',
    height: 50,
    borderRadius:8,
    border:'1px solid black',
    'text': {
        ...theme.typography['h2'],
        color: 'red',
    },
   
    // 'label.Mui-focused': {
    //     color: 'black',
    //     marginLeft: 0
    // },

    '& .MuiOutlinedInput-root': {
        // borderRadius: '100px',
        // height: 50,
        '& fieldset': {
            border: 0,
        },
        // '&.Mui-focused':{
            
        // },
        // '&.Mui-focused fieldset': {
        //     height:48,
        //     background:'#F9FAFB',
        //     zIndex:0
        // },
    },

    'fieldset': {
        border: 1
    },
}))
import {styled} from "@mui/material";
import TextField  from "@mui/material/TextField";

export const StyledTextField = styled(TextField)(({theme}) => ({
    width: '100%',
    background: 'white',
    // height: 55,
    borderRadius:8,
    // color:'red',
    // 'text': {
    //     ...theme.typography['h2'],
    //     color: 'red',
    // }, 
    // 'label.Mui-focused': {
    //     color: 'black',
    //     marginLeft: 0
    // },
    // 'MuiInputBase-colorPrimary':{
    //     borderColor:'red'
    // },
    '& .MuiOutlinedInput-root': {
        height: 50,
        '& fieldset': {
            border: '1px solid black',
            borderRadius: '8px',
        },
        '&.Mui-focused':{
            background:'#F9FAFB',
            borderRadius: '8px',
            // border:'1px solid red',
            // '&$focused $notchedOutline': {
            //     borderColor: '#2EFF22',
            //     borderWidth: 1,
            // },
        },
        // '&.Mui-focused fieldset': {
        //     height:48,
        //     background:'#F9FAFB',
        //     zIndex:0
        // },
    },
    // 'fieldset': {
    //     border: 1
    // },
}))
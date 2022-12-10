import { Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

import Image from "next/image";
import food from '../../../Assets/Images/food2.jpeg'

const CardPartyMobile = () => {
    return ( 
        <Grid mt={30} boxShadow={'0 2px 12px 0 rgba(0, 0, 0, 0.1)'} width={500} height={200} p={1}>
            <Grid  mb={1} display={'flex'}>
                <Grid >
                    <Image src={food} alt={'food'} style={{width:'82px',height:'82px'}}  />
                </Grid>
                <Grid>
                    <Grid>
                        <Typography>{'نودل تایلندی با مرغ'}</Typography>
                    </Grid>
                    <Grid>
                    <Typography>{"رستوران آسیـایی وک اند رول"}</Typography>
                    </Grid>
                    <Grid display={'flex'} height={'32px'}>
                        <Grid width={'32px'} display={'flex'} alignItems={'center'} sx={{borderColor:'primary.main'}} border={'1px solid'} borderRadius={'5px'}>
                            <Typography color={'primary.main'}>{'45%'}</Typography>
                        </Grid>
                        <Grid>
                            <Typography >330,000</Typography>
                            <Typography>138000تومان</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid width={'100%'} display={'flex'} justifyContent={'space-between'}>
                <Grid>
                    4000تومان
                </Grid>
                <Grid>
                    موجودی
                </Grid>
            </Grid>

        </Grid>
     );
}
 
export default CardPartyMobile;
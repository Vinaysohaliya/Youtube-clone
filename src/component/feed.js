import {Box,Stack,Typography, colors} from '@mui/material' 
function Feed(params) {
    return(
        <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>

        <Box sx={{height:{sx:'auto',md:"92vh",borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}}>sidebar</Box>
        <Typography className='copyright' variant='body2' sx={{mt:1.5 ,color:"#fff"}}>SideBar</Typography>
        </Stack>
    )
}

export default Feed;

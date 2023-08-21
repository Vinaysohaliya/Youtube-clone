import { Paper,IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
// import {useNavig}
function SearchBar() {
 return(
    <div>
       <Paper component="form" sx={{borderRadius:20,border:'1px solid #e3e3e3',pl:5,mr:{sm:5},borderRadius:20}}>
         <input className="search-bar"
            placeholder="Search..."
            value=""
            onChange={()=>{}
            }
         />
         <IconButton type="submit" sx={{p:'10px',color:'red'}}><Search/></IconButton>
       </Paper> 
    </div>
 )   
}

export default SearchBar;
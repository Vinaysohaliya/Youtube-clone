import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './component/navbar'
import Feed from './component/feed'
import VideoDetail from './component/VideoDetail'
import SearchDetail from './component/searchDetail.js'
import ChannelDetail from './component/Channel'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id'  element={<VideoDetail/>}/>
        <Route path='/channel/:id'  element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm'  element={<SearchDetail/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

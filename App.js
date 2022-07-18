import React, {useState, useEffect} from 'react';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';


const API_KEY = 'f78a91453502c98c577f25573b223ef2';

function App(){
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async() =>{
    setLoading(true);
    try{
    const response = await fetch('https://api.themoviedb.org/3/tv/550?api_key=f78a91453502c98c577f25573b223ef2&language=en-US');
    const jsonResponse = await response.json();
    setLoading(false);
    setData(jsonResponse);

    }
    catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);
if(!loading){
  return(
  <>
    <div className='navbar'>
      <div className='itemsForNavbar1'>
        <img className='tmdbLogo' src='tmdbLogo.png' alt='' />
        <div className='insideElements'><a href=''>Movies</a></div>
        <div className='insideElements'><a href=''>TV Shows</a></div>
        <div className='insideElements'><a href=''>People</a></div>
        <div className='insideElements'><a href=''>More</a></div>
      </div>
      <div className='itemsForNavbar2'>
        <div className='insideElements'><a href=''><AddIcon fontSize='large' sx={{color: 'white'}}/></a></div>
        <div className='insideElements'><a href=''><button className='EnButton' onClick={null}>EN</button></a></div>
        <div className='insideElements'><a href=''><NotificationsIcon fontSize='medium' /></a></div>
        <div className='insideElements'><a href=''><img className='searchIcon' src = 'search icon.png' alt=''/></a></div>
      </div>
    </div>

    <div className='body'>
      <div className='firstDiv'>
        <p className='WelcomeP'>Welcome.</p>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <input className='inputField' type='text' placeholder='Search for a movie, tv show, person......' />

      </div>
    </div>

    <div className='body2'>
      <div className='firstDiv2'>
        <h2>What's Popular</h2>
        <div className='buttonDiv'>
          <a href='#' className='buttonInsideFirstDiv2'>Streaming</a>
          <a href='#' className='buttonInsideFirstDiv2'>On Tv</a>
          <a href='#' className='buttonInsideFirstDiv2'>For Rent</a>
          <a href='#' className='buttonInsideFirstDiv2'>In Theatres</a>
        </div>
      </div>
      <div className='secondDiv2'>
        <a className='imageA' href=''>
          {/*<div>
          {
                
                Data.map((data)=>{
                  return <div>
                    {console.log(data.adult)}
                    <h1>{data.adult}</h1>
                  </div>
                })
          }
          </div>*/}
        </a>
      </div>
    </div>
  </> 
  )}
}
export default App;
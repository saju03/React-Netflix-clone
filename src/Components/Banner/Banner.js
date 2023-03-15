import React, { useEffect, useState } from 'react'
import './banner.css'
import {API_KEY,ImageBaseUrl} from'../../constents/constents'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((data)=>{
      let random = Math.floor(Math.random() * 20);
    
      setMovie(data.data.results[random])
    })
  },[])
  return (
   
    <div className='banner' style={{backgroundImage:`url(${movie ? ImageBaseUrl+movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className ='button'>play</button>
                <button className ='button'>mylist</button>


            </div>
            <h1 className='discription'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
import React, {useEffect,useState}from 'react'
import {API_KEY} from '../../constents/constents'
import YouTube from 'react-youtube';
import {ImageBaseUrl} from '../../constents/constents'

import "./RowPost.css"

import axios from '../../axios'




function RowPost(props) {
    const [urlId,setUrlId] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(props.url).then((data)=>{
            console.log(data.data.results);
            setMovies(data.data.results)
        })
    })
 
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
         
          autoplay: 0,
        },
      };

      
  const handleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((data)=>{
    if(data.data.results.length!==0){
        setUrlId(data.data.results[0])
    }else{

    }
    })
}
  
  return (  
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((movie)=> <img className= {props.isSmall ? 'poster' : 'smallPoster'} src={`${ImageBaseUrl+movie.backdrop_path}`} alt=""  onClick={()=>handleMovie(movie.id)} /> )}
        </div>

         {urlId && <YouTube videoId={urlId.key} opts={opts}/> }
    </div>
   
  )
}

export default RowPost
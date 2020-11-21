import React from 'react';
import '../App.css';
import AppRouter from '../Router/Router';
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom';


const MovieList =(props)=>{
    return(
        <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap"}}>
            {props.list.map(el => {return ( 
            <AppRouter/>,
            <MovieCard card={el}/>)})}
        </div>

    );
}
export default MovieList;
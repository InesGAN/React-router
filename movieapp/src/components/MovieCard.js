import React,{useState} from "react";
import '../App.css';
import'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap';
import StarRatingComponent from "react-star-rating-component";
import {Link} from 'react-router-dom';



const MovieCard = (props) => {
return (
<div className="movie">
<Link to='/Description/ $ {props.card.id}'>
  <Card style={{ width: '18rem' }}>
    <Card.Img className="imgTop" variant="top" src={props.card.posterUrl} />
    <Card.Body>
      <Card.Title>{props.card.title}</Card.Title>
        <Card.Text>
        {props.card.description}
        </Card.Text>
      
      <StarRatingComponent name="rate" starCount={5} value={props.card.rate}/>
    </Card.Body>
  </Card>
</Link>
  </div>
);
};
export default MovieCard;
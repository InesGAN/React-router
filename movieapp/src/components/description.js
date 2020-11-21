import React,{component} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

const Description =(props) => {


        return(
            <div>
                <Router>
                    <h1>Description of the movie</h1>
                    <h3>text</h3>
        <Route path={'${props.match.path}/:id'} render={<div>   {props.card.description}</div>}/>
                    <p onClick={()=> props.history.goBack}> Go Back </p>
                </Router>

            </div>

        );



        };
export default Description;
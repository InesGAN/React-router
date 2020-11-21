import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MovieCard from "../components/MovieCard";
import Description from "../components/description";
import  App from "../App";

const AppRouter =() => (
<Router>
<Switch>

    <Route exact path="/" component={App}/>
    <Route path="/Description/:id" exact component={Description}/>
    
</Switch>
</Router>

)
export default AppRouter;
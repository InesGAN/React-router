import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import FilterMovie from "./components/FilterMovie";
import AddMovie from "./components/AddMovie";
import { v4 as uuidv4 } from 'uuid';
// import {Link} from 'react-router-dom';
// import AppRouter from "./Router/Router";


function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Baby Boss",
      description:
        "Seven-year-old Tim gets jealous when his parents give all their attention to his little brother. Tim soon learns that the baby can talk and the two team up to foil the plans of the CEO of Puppy Co.",
      posterUrl:
        "https://bestnetflixshows.com/wp-content/uploads/2019/03/kids-movies-netflix-990x556.jpg",
      rate: 0,
      

    },
    {
      id: uuidv4(),
      title: "Aladin",
      description:
        "Aladdin, a kind thief, woos Jasmine, the princess of Agrabah, with the help of Genie. When Jafar, the grand vizier, tries to usurp the king, Jasmine, Aladdin and Genie must stop him from succeeding.",
      posterUrl:
        "https://cdn3-www.comingsoon.net/assets/uploads/2019/07/Aladdin.jpg",
      rate: 3,
      
    },
    {
      id: uuidv4(),
      title: "Pokemon",
      description:
        "Aladdin, a kind thief, woos Jasmine, the princess of Agrabah, with the help of Genie. When Jafar, the grand vizier, tries to usurp the king, Jasmine, Aladdin and Genie must stop him from succeeding.",
      posterUrl:
        "https://movies-b26f.kxcdn.com/wp-content/uploads/2020/01/Pokemon-Mewtwo-Strikes-Back-Netflix-Premiere-770x470.png",
      rate: 2,
      
    },
    {
      id: uuidv4(),
      title: "Tinker Bell",
      description:
        "Tinker Bell is a fictional character from J. M. Barrie's 1904 play Peter Pan and its 1911 novelization Peter and Wendy. She has appeared in a variety of film and television adaptations of the Peter Pan stories, in particular the 1953 animated Walt Disney picture Peter",
      posterUrl:
        "https://ichef.bbci.co.uk/images/ic/640x360/p05r3fx1.jpg",
      rate: 5,
      

    },
  ]);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const FilterR = (x) => setMovieRating(x);
  const FilterT = (x) => setMovieTitle(x);
  const AddMovies = (x) => {
    setMovies([...movies, x]);
  };
  return (
    <div className="App">
      <FilterMovie UpdateTitle={FilterT} UpdateRating={FilterR} />
        <div className="Body-Cards">
      <MovieList
        list={movies.filter(
          (el) =>
            el.title.toUpperCase().includes(movieTitle.toUpperCase()) &&
            el.rate >= movieRating
        )}
      />
        </div>
      <AddMovie Updatemovie={AddMovies} />
      
    </div>
  );
}

export default App;

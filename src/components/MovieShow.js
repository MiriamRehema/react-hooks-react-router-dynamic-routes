import React from "react";
//import { Route, useRouteMatch } from "react-router-dom";
//import MoviesList from "./MoviesList";
import {useParams}from "react-router-dom"

function MovieShow({movies}) {
    const params=useParams();
    console.log(params);

    const movie=movies.find(movie=>movie.id===parseInt
    (params.movieId)    )
  return (
    <div>
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieShow;
// {'https://image.tmdb.org/t/p/w500/' + props.results.poster_path}
import React from 'react'
import MovieItem from "./MovieItem";



function MovieList(props) {
  return (
    <div className="movie__list">
        <ul>
            {props.videos.map((list, index) => (
                <MovieItem key={index} videos={list} />
            ))}
        </ul>
    </div>
    )
}

export default MovieList
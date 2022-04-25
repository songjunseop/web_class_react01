import React from 'react'

function MovieItem(props) {
    return (
        <li>
            <img src={'https://image.tmdb.org/t/p/w500/' + props.results.poster_path} alt={'https://image.tmdb.org/t/p/w500/' + props.results.title} />
            <p className='title'>{props.results.title}</p>
        </li>
    )
}

function MovieList(props) {
  return (
    <div className="movie__list">
        <ul>
            {props.data.data.results.map((list, index) => (
                <MovieItem key={index} results={list} />
            ))}
        </ul>
    </div>
    )
}

export default MovieList
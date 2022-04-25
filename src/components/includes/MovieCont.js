import React from 'react'
import MovieList from './MovieList'

function MovieCont(props) {
  return (
    <section className='movie__cont'>
        <div className="container">
            <div className="movie__inner">
                <MovieList data = {props.lists} />
                
            </div>
        </div>
    </section>
  )
}

export default MovieCont
import React from 'react'

function MovieItem(props) {
  // {'https://image.tmdb.org/t/p/w500/' + props.results.poster_path}
  return (
      <li>
          <a href={`https://www.themoviedb.org/movie/${props.videos.id}?language=ko`}>
            <img src={'https://image.tmdb.org/t/p/w500' + props.videos.poster_path} alt={'https://image.tmdb.org/t/p/w500/' + props.title} />
            <p className='title'>{props.videos.title}</p>
          </a>
      </li>      
    
  )
}

export default MovieItem
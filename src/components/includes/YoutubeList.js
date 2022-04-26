// import React from 'react'

// function YoutubeItem(props) {
//     return (
//         <li>
//             <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
//             <p className='title'>{props.video.snippet.title}</p>
//         </li>
//     )
// }

// function YoutubeList(props) {
//     console.log(props)
//   return (
//     <div className='youtube__list'>
//         <ul>
//             {props.items.data.items.map(list => (
//                 <YoutubeItem key={list.id.videoId} video={list} />
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default YoutubeList

import React from 'react'
import YoutubeItem from "./YoutubeItem";

function YoutubeList(props) {
  return (
    <div className="youtube__list">
        <ul>
            {props.videos.map((video, index) => (
                <YoutubeItem key={index} video={video} />
            ))}
        </ul>
    </div>
  )
}

export default YoutubeList
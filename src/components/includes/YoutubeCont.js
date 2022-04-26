import React from 'react'
import YoutubeList from './YoutubeList'
import YoutubeSearch from './YoutubeSearch'

function YoutubeCont(props) {
  return (
    <section className='youtube__cont'>
        <div className="container">
            <div className="youtube__inner">
                {/* <YoutubeSearch /> */}
                <YoutubeList items = {props.lists} />
            </div>
        </div>
    </section>
  )
}

export default YoutubeCont
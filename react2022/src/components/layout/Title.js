import React from 'react'

function Title(props) {
  return (
    <section className={`cont__title ${props.title[2]}`}>
        <div className="container">
            <h1>
                <strong>{props.title[0]}</strong>
                <em>{props.title[1]}</em>
            </h1>
        </div>
    </section>
  )
}

export default Title;
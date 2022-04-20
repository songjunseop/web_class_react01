import React from "react";


function PortInfo({link, image, title, category}){
    return(
        <article className="port__item">
            <figure className="img">
                <a href={link}><img src={image} alt={title} /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}

function PortCont(props){
    return (
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {props.ports.map((ports) => (
                        <PortInfo
                        key={ports.title}
                        link={ports.link}
                        image={ports.image}
                        title={ports.title}
                        category={ports.category}
                        />
                    ))}
                    {/* <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[0].link}><img src={props.ports[0].image} alt={props.ports[0].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[0].title}</h3>
                            <p>{props.ports[0].category}</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[1].link}><img src={props.ports[1].image} alt={props.ports[1].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[1].title}</h3>
                            <p>{props.ports[1].category}</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[2].link}><img src={props.ports[2].image} alt={props.ports[2].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[2].title}</h3>
                            <p>{props.ports[2].category}</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[3].link}><img src={props.ports[3].image} alt={props.ports[3].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[3].title}</h3>
                            <p>{props.ports[3].category}</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[4].link}><img src={props.ports[4].image} alt={props.ports[4].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[4].title}</h3>
                            <p>{props.ports[4].category}</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[5].link}><img src={props.ports[5].image} alt={props.ports[5].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[5].title}</h3>
                            <p>{props.ports[5].category}</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[6].link}><img src={props.ports[6].image} alt={props.ports[6].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[6].title}</h3>
                            <p>{props.ports[6].category}</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[7].link}><img src={props.ports[7].image} alt={props.ports[7].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[7].title}</h3>
                            <p>{props.ports[7].category}</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href={props.ports[8].link}><img src={props.ports[8].image} alt={props.ports[8].title} /></a>
                        </figure>
                        <div className="text">
                            <h3>{props.ports[8].title}</h3>
                            <p>{props.ports[8].category}</p>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    )
}

export default PortCont;
import React from 'react'
import './MovieRow.css'

const MovieRow = ({title, items}) => {
    return ( 
        <div className='movieRow'>
            <h2>{title}</h2>
            {/* <span className='more'>mais</span> */}
            <div className="movieRow-list-area">
                <div className='movieRow-list'>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
     )
}
 
export default MovieRow
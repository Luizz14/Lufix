import React from 'react'
import './FeaturedMovieRow.css'


const FeaturedMovieRow = ({title, items}) => {
    return ( 
        <div>
            <div className='featured-MovieRow'>
            <h2>Só na Luflix</h2>
            {/* <span className='more'>mais</span> */}
            <div className="featured-MovieRow-list-area">
                <div className='featured-MovieRow-list'>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="featured-MovieRow-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
     )
}
 
export default FeaturedMovieRow
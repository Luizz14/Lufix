import React from 'react'

import './FeaturedMovie.css'

const FeaturedMovie = ({ item }) => {
    let firstDate = new Date(item.first_air_date)
    let genres = []
    for( let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return ( 
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">
                        {item.name}
                    </div>
                    <div className="featured-info">
                        <div className="featured-points">{item.vote_average} pontos</div>
                        <div className="featured-relesed">{firstDate.getFullYear()}</div>
                        <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured-overview">{item.overview}</div>
                    <div className="featured-buttons">
                        <button className='featured-watch-button'>
                            <div className="featured-play">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg>
                            </div>
                            <div className='featured-watch'>Assistir</div>                            
                        </button>
                        {/* <a className='featured-watch-button' href={`/watch/${item.id}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg> Assistir</a> */}
                        <a className='featured-info-button' href={`/list/add/${item.id}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg> Mais informações</a>
                    </div>
                    <div className="featured-genres">
                        <strong>Gêneros: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
     )
}
 
export default FeaturedMovie
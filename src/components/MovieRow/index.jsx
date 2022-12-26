import React, { useState, useEffect } from 'react'
import './MovieRow.css'
import { NavigateBefore } from '@mui/icons-material'
import { NavigateNext } from '@mui/icons-material'

const MovieRow = ({title, items}) => {
    const [scrollX, setScrollX] = useState(0)
    const [hiddenArrowLeft, setHiddenArrowLeft] = useState('none')
    const [hiddenArrowRight, setHiddenArrowRight] = useState('flex')

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        setHiddenArrowRight('flex')
        if(x > 0) {
            x = 0
            setHiddenArrowLeft('none')
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 200
        setHiddenArrowLeft('flex')
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
            setHiddenArrowRight('none')
        }
        setScrollX(x)
    }

    return ( 
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className="movieRow-left" onClick={handleLeftArrow} style={{display: hiddenArrowLeft}}>
                <NavigateBefore style={{fontSize: 50}}/>
            </div>
            <div className="movieRow-right" onClick={handleRightArrow} style={{display: hiddenArrowRight}}>
                <NavigateNext style={{fontSize: 50}}/>
            </div>
            {/* <span className='more'>mais</span> */}
            <div className="movieRow-list-area">
                <div className='movieRow-list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 300
                }}>
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
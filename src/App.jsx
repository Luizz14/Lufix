import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import Header from './components/Header'
import MovieRow from './components/MovieRow/index'
import FeaturedMovie from './components/FeaturedMovie/index'
import FeaturedMovieRow from './components/FeaturedMovieRow'

import './App.css'

const App = () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  const [originalsMovie, setOriginalsMovie] = useState([])

  useEffect(()=>{
    const loadAll = async () => {
      //Lista total dos filmes
      let list = await Tmdb.getHomeList()
      setMovieList(list)
      
      //Pegar o featured
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setOriginalsMovie(originals)
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.addEventListener('scroll', scrollListener)
    }
  }, [])

  return ( 
    <>
      <div className="page">
        <Header black={blackHeader}/>
        { featuredData &&
          <FeaturedMovie item={featuredData} />
        }
        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
          {originalsMovie.map((item, key) => (
            <FeaturedMovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>

        <footer>
          Feito com amor por Luiz Gustavo M. S.
          Direitos de imagem para Netflix <br />
          Dados pegos do site Themoviedb.org
        </footer>
      </div>
    </>
   )
}
//<MovieRow key={key} title={item.title} items={item.items}/>
export default App
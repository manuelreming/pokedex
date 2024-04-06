import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../styles/PokeDetailPage.css'

const PokeDetailPage = () => {

  const {name} = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(()=>{
 getPokemon()
  },[name])
  console.log(pokemon)
  return (
    <div>
      <div className="pokedex__barrone"></div>
      <div className="pokedex__barrtwo"></div>
      <div className="pokedex__header">
        <img className="pokedex__img" src="/pokedex1.png" alt="pokedex" />
      </div>
      <header className='pokedetail__img-container'>
        <img  src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>

      <p className='pokedetail__id'># {pokemon?.id}</p>
      <h2 className='pokedetail__name'>{pokemon?.name}</h2>
      
    </div>
  )
}

export default PokeDetailPage

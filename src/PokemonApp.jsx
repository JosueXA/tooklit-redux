import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingPokemons, setPokemons, getPokemons } from "./store/slices/pokemon";



export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector( state => state.pokemons );


  useEffect(() => {
    dispatch( getPokemons() );
  }, []);
  
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading  ? 'True' : 'False' }</span>

      <ul>
        { 
          pokemons.map( ({ name }, id) => (
            <li key={ id }>{ name }</li>
          ) )
        }
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>

      <button
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons( page ) )}
      >
        Next
      </button>
    </>
  )
}

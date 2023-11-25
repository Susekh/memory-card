/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import '../styles/pokeCardsStyle.css';
import Tilt from 'react-parallax-tilt';


function PokeCards(props){
    const pokeName = props.pokeName;
    const [pokeData, setPokeData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, { mode: 'cors' });
          const pokeResponse = await response.json();
  
          // Set the fetched data to the pokeData state
          setPokeData(pokeResponse);
        } catch (err) {
          alert('Cannot fetch Pokemon data');
        }
      }
  
      fetchData();
    }, [pokeName]);



    return (
      <>
        {pokeData ? (
          <Tilt glareEnable = {true}>
            <div className="cards">
              <div className="poke-pic-div">
                {/* Display the Pokemon image */}
                <img src={pokeData.sprites.front_default} alt={`${pokeName} sprite`} />
              </div>
              <div className="card-content">
                <h4>{pokeName}</h4>
                {/* Display other information about the Pokemon */}
                <p>Height: {pokeData.height}</p>
                <p>Weight: {pokeData.weight/10}kg</p>
              </div>
            </div>
          </Tilt>
          
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
}

export default PokeCards;
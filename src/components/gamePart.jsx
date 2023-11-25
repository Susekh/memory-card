import PokeCards from "./pokeCards";


function GamePart(){
    const pokeArry = ['pikachu', 'dragonite', 'magikarp', 'arceus', 'mew'];



    const shuffleArray = (array) => {
        let shuffledArray = array;
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };


      
    let randomArry = shuffleArray(pokeArry);

    return(
        <>
            <div className="score-board">
            <div className="current-score"><h3>current score : </h3></div>
            <div className="highest-score"><h3>highest score : </h3></div>
            </div>
            <div className="cards-container">
                {randomArry.map((name, index) => {
                    return(
                        <PokeCards key={index} pokeName = {name} />
                    )
                })}
            </div>
        </>
    )
}

export default GamePart;
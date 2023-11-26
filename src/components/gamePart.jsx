import PokeCards from "./pokeCards";
import '../styles/gamePartStyle.css'
import { useState } from "react";

// array which keeps the count of hits for every cards
let hitCounts = [-1, -1, -1, -1, -1];


function GamePart(){
    const pokeArry = ['pikachu', 'dragonite', 'magikarp', 'arceus', 'mew'];
    const [currentScore, setCurrentScore] = useState(0);
    const [highestScore, setHighestScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    



    const shuffleArray = (array) => {
        let shuffledArray = array;
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };


    //   state array to keep randomized value of pokeArry to trigger randomization of cards after clicking a card 

      let [randomArry, setRandomArry] = useState(shuffleArray(pokeArry));


//    function increments hits and checks wheather game is over or not
    

    const handleClick = event => {
        setCurrentScore(currentScore + 1);
        switch(event.currentTarget.id){
            case 'pikachu':
                hitCounts[0]++;
                if(hitCounts[0]){
                    setGameOver(true);
                    hitCounts[0] = -1;
                    setHighestScore(currentScore > highestScore? currentScore : highestScore);
                    setCurrentScore(0);
                    }
                    break;
            case 'dragonite':
                hitCounts[1]++;
                if(hitCounts[1]){
                    setGameOver(true);
                    hitCounts[1] = -1;
                    setHighestScore(currentScore > highestScore? currentScore : highestScore);
                    setCurrentScore(0);
                    }
                    break;
                case 'magikarp':
                    hitCounts[2]++;
                    if(hitCounts[2]){
                        setGameOver(true);
                        hitCounts[2] = -1;
                        setHighestScore(currentScore > highestScore? currentScore : highestScore);
                        setCurrentScore(0);
                    }
                    break;
                case 'arceus':
                    hitCounts[3]++;
                    if(hitCounts[3]){
                        setGameOver(true);
                        hitCounts[3] = -1;
                        setHighestScore(currentScore > highestScore? currentScore : highestScore);
                        setCurrentScore(0);
                    }
                    break;
                case 'mew':
                    hitCounts[4]++;
                    if(hitCounts[4]){
                        setGameOver(true);
                        hitCounts[4] = -1;
                        setHighestScore(currentScore > highestScore? currentScore : highestScore);
                        setCurrentScore(0);
                    }
                    break;
            

        }
        setRandomArry(() => shuffleArray(randomArry))
        
    }
    

// function to initiate the game again after game getting over

    function handlePlayAgain(){
        setGameOver(false);
        hitCounts.forEach((_,index, array) => {
            array[index] = -1;
        })
        
    }

    

    



    return(
        <>
            <div className="score-board">
            <div className="current-score"><h3>current score : {currentScore}</h3></div>
            <div className="highest-score"><h3>highest score : {highestScore}</h3></div>
            </div>
            <div className="cards-container">
                {randomArry.map((name, index) => {
                    return(
                        <div key={index} ><PokeCards handleClick = {handleClick}    pokeName = {name}  /></div>
                    )
                })}
            </div>
            {gameOver ?(
                <div className="game-over-overLay">
                    <div className="game-over-div">
                        <h1>GAME OVER!</h1>
                        <button onClick={handlePlayAgain}>Play Again</button>
                    </div>
                </div>
                
            ) : ('')}
        </>
    )
}

export default GamePart;
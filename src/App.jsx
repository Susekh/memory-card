import './styles/App.css'
import GamePart from './components/gamePart';

function App(){
  return (
    <>
      <div className="header-text"><h1>Pokemon</h1> <h1 className='header-text-secondColor'>Memory Game</h1></div>
        
      <div className="main-content-part">
        <GamePart />
      </div>
    </>
  )
}

export default App;
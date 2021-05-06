import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cricketerData from './fakeData/cricketerData'
import Team from './components/Team/Team';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';

function App() {
  const [cricketers, setCricketers] = useState([])
  const [team, setTeam] = useState([])

  useEffect(() => {
    const first10 = cricketerData.slice(0, 10)
    setCricketers(first10)
  }, [])

  const handleAddPlayer = (player) => {
    if (team.indexOf(player) !== -1) { alert("Player already added!") }
    else {
      const newPlayer = [...team, player]
      setTeam(newPlayer)
    }
  }

  return (
    <div>
      <Team team={team}></Team>
      <div className='row row-cols-1 row-cols-md-4 g-4 mt-4'>
        {
          cricketers.map((player) => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
        }
      </div>
    </div>
  );
}

export default App;

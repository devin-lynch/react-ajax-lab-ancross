import { useState, useEffect } from 'react'
import './App.css';
import DisplayCards from './DisplayCards'

export default function App() {

  let [data, setData] = useState({villagers: []})

  useEffect(() => {
    fetch('http://acnhapi.com/v1/villagers/')
      .then(response => response.json())
      .then((rdata) => {
        rdata = Object.values(rdata)
        setData({villagers: rdata})
        console.log('Villager Data:', rdata)
      })
  }, [])

  const villagerComponents = data.villagers.map((villager, i) => {
    return <li>{villager.name['name-USen']}</li>
  })

  return (
    <div className="App">
      {villagerComponents}
    </div>
  );
}


import { useState, useEffect } from 'react'
import './App.css';

export default function App() {

  let [data, setData] = useState({villagers: []})

  useEffect(() => {
    fetch('http://acnhapi.com/v1/villagers/')
      .then(response => response.json())
      .then((rdata) => {
        rdata = Object.values(rdata)
        console.log('Villager Data:', rdata)
      })
  }, [])

  return (
    <div className="App">

    </div>
  );
}



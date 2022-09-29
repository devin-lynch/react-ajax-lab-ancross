import { useState, useEffect } from 'react'
import './App.css';
import DisplayCards from './DisplayCards'

export default function App() {

  // API data
  let [data, setData] = useState({villagers: []})
  // search input
  let [search, setSearch] = useState('')
  let [faves, setFaves] = useState([])

  useEffect(() => {
    fetch('http://acnhapi.com/v1/villagers/')
      .then(response => response.json())
      .then((responseData) => {
        // console.log(responseData)
        responseData = Object.values(responseData)
        setData({villagers: responseData})
        console.log('Villager Data:', responseData)
      })
      .catch(err => console.warn(err))
  }, [])

  const getFilteredVillagers = () => {
    const filteredVillagers = data.villagers.filter(villager => {
      const name = villager.name['name-USen'].toLowerCase()
      return name.includes(search.toLowerCase())
    })
    return filteredVillagers
  }

  getFilteredVillagers()

  return (
    <div className="App">
      <label htmlFor='search-input'>Search:</label>
      <input
        type='text'
        placeholder='enter villager name...'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <DisplayCards
        villagers={getFilteredVillagers()}
      />
    
    </div>
  );
}


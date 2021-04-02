import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';

function App() {
  const [characters, SetCharacters] = useState([])
  const [isLoading, SetIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // console.log(result.data)
      SetCharacters(result.data)
      SetIsLoading(false)
    }

    fetchCharacters()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;

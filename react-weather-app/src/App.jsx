import Search from "./Components/Search";
import Country from "./Components/Country";
import { useEffect, useState } from "react";
import axios from 'axios'

const App = () => {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [search, setSearch] = useState('');
  const [debounce, setDebounce] = useState('');
  const [country, setCountry] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value)  
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(search)
    }, 1000)

    return () => clearTimeout(timer); 
  }, [search])

  useEffect(() => {
    if (debounce) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${debounce}&APPID=${API_KEY}`)
      .then(response => {
        setCountry(response.data)
        setError('')
      })
      .catch(error => {
        if(error.response.status == 404) {
          setError(`No '${debounce}' found. Please try again.`)
          console.log(error);
        }
      })
    }
  }, [debounce])

  return (
    <div className="main-container">
      <Search 
        search={search}
        handleChange={handleChange}/>
      {error ? error 
      : country ? <Country country={country}/> 
      : "Search a country"}
    </div>
  )
}

export default App;
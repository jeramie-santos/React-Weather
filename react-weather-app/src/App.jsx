import Search from "./Components/Search";
import { useEffect, useState } from "react";
import axios from 'axios'

const App = () => {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [search, setSearch] = useState('Philippines');
  const [weather, setWeather] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${API_KEY}`)
      .then(response => {
        setWeather(weather)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  return (
    <div className="main-container">
      <Search 
        search={search}
        handleChange={handleChange}/>
    </div>
  )
}

export default App;
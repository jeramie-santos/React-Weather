import Search from "./Components/Search";
import { useState } from "react";

const App = () => {

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="main-container">
      <Search 
        search={search}
        handleChange={handleChange}/>
    </div>
  )
}

export default App;
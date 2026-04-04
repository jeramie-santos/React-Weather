const Search = ({search, handleChange}) => {
    return (
        <div className="">
            <input className="border-2 border-white py-2 px-4 rounded-full text-white shadow-lg shadow-white/30 focus:border-blue-300/65 focus:outline-none focus:shadow-blue-300/" 
                type="text" 
                value={search} 
                onChange={handleChange} placeholder="Search"/>
        </div>
    )
}

export default Search;
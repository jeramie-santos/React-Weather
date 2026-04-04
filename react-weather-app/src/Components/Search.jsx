const Search = ({search, handleChange}) => {
    return (
        <div className="border-2 border-white">
            <input type="text" className="text-white" value={search} onChange={handleChange} placeholder="Search"/>
        </div>
    )
}

export default Search;
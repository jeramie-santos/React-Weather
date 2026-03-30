const Search = ({search, handleChange}) => {
    return (
        <div className="serach">
            <input type="text" value={search} onChange={handleChange}/>
        </div>
    )
}

export default Search;
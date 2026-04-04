const Country = ({country}) => {
    
    const temp = (country.main.temp - 273.15).toFixed(2);
    const icon = country.weather[0].icon;

    return (
        <div className="bg-blue-300/60 border-4 border-blue-300/65 py-10 px-8 flex flex-col gap-8 rounded-4xl shadow-lg shadow-blue-300">
            <div className="flex flex-col items-center justify-center">
                <img className="border-2 w-30" src={`https://openweathermap.org/payload/api/media/file/${icon}.png`} alt={`${country.weather[0].description}`} />
            </div>
            <p className="text-center font-bold text-6xl">{temp} &deg;C</p>
            <h2 className="text-center text-4xl">{country.name}</h2>
            <div>
                <p>{country.main.humidity}% Humidity</p>
                <p>{country.wind.speed} km/h Wind Speed </p>
            </div>
        </div>
    )
}

export default Country;
const Country = ({country}) => {
    const temp = (country.main.temp - 273.15).toFixed(2);

    return (
        <div>
            <h1>{country.name}</h1>
            <p>{temp} &deg;C</p>

            <p>{country.main.humidity}% Humidity</p>
            <p>{country.wind.speed} km/h Wind Speed </p>
        </div>
    )
}

export default Country;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faWind } from '@fortawesome/free-solid-svg-icons'

const Country = ({country}) => {
    
    const temp = (country.main.temp - 273.15).toFixed(2);
    const icon = country.weather[0].icon;

    return (
        <div className="bg-blue-300/60 border-4 border-blue-300/65 pb-10 px-8 flex flex-col gap-8 rounded-4xl  w-sm">
            <div className="flex flex-col gap-1 justify-center items-center">
                <div className="">
                    <img className="w-40" src={`https://openweathermap.org/payload/api/media/file/${icon}.png`} alt={`${country.weather[0].description}`} />
                </div>
                <div className="flex">
                    <p className="text-center font-bold text-7xl flex-1">{temp}</p>
                    <p className="flex-1 text-3xl"> &deg;C</p>
                </div>
                <h2 className="text-4xl font-small">{country.name}</h2>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>
                        <FontAwesomeIcon className='text-3xl' icon={faWater} />    
                    </div>
                    <div>
                        <p className="text-xl font-bold">{country.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div>
                        <FontAwesomeIcon className='text-3xl' icon={faWind} />
                    </div>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <p className="text-xl font-bold">{country.wind.speed}</p>
                            <p>km/h</p>
                        </div>
                        <p>Wind Speed </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country;
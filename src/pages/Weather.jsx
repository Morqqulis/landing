import { useEffect, useState } from 'react'
import { getWeather } from '../utils'
const Weather = () => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        getWeather().then(weather => setWeather(weather))

        return () => setWeather(null)
    }, [])

    useEffect(() => {
        if (!city) return

        setLoading(true)
        const debounce = setTimeout(
            () =>
                getWeather(city).then(weather => {
                    setWeather(weather)
                    setLoading(false)
                }),
            900
        )

        return () => clearTimeout(debounce)
    }, [city])

    return (
        <section className={`py-10`}>
            <div className="container">
                <h1 className={`mb-5 text-center text-5xl font-bold`}>Weather</h1>

                <div className={`mb-10 flex justify-center`}>
                    <input
                        className={`w-full max-w-80 rounded-xl border border-[#1e914c] p-3 text-lg transition-all duration-300 ease-linear focus:bg-cyan-300 focus:outline-none`}
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>

                <div className={`rounded-xl bg-green-950 py-10 text-white`}>
                    {loading ? (
                        <h2 className={`text-center text-3xl font-bold text-red-500`}>Loading...</h2>
                    ) : (
                        weather &&
                        !loading && (
                            <div className={`grid place-items-center gap-5 text-xl`}>
                                <h2 className={`text-5xl font-bold text-green-600`}>{weather.name}</h2>
                                <span className={`text-3xl`}>
                                    Temperature: = {`${weather.main.temp.toString().slice(0, 2)} °C`}
                                </span>

                                <div className={`flex flex-col items-center justify-center`}>
                                    <span>Sky = {`${weather.weather[0].description}`}</span>
                                    <span className={``}>Humidity: = {`${weather.main.humidity} %`}</span>
                                    <span className={``}>Wind Speed: = {`${weather.wind.speed} m/s`}</span>
                                    <img
                                        className={`maw[400px] h-auto w-full`}
                                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                        alt="weather icon"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Weather

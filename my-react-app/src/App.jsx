import { useEffect, useState } from 'react'
import SearchBox from './Component/SearchBox'
import WeatherCard from './Component/WeatherCard'

export default function App() {

    const [searchTerm, setSearchTerm] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        if (!searchTerm) return

        fetch(`https://api.weatherapi.com/v1/current.json?key=44506253af9e482daba54152263005&q=${searchTerm}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error.message)
                    setWeatherData(null)
                } else {
                    setError(null)
                    setWeatherData(data)
                }
            })

    }, [searchTerm])

    return (
        <>
            <SearchBox
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <WeatherCard weatherData={weatherData} error={error} />
        </>
    )
}
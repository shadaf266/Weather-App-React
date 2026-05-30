export default function WeatherCard({ weatherData, error }) {

    if (error) {
        return <p>{error}</p>
    }

    if (!weatherData) {
        return <p>Loading...</p>
    }
    return (
        <div className='weather-card'>

            <h2>{weatherData.location.name}</h2>

            <p>
                {weatherData.current.condition.text}
            </p>
            <p>
                Temperature: {weatherData.current.temp_c}°C
            </p>
            <p>
                Humidity: {weatherData.current.humidity}%
            </p>
        </div>
    )
}
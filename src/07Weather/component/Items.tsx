import Item from './Item'
import { useWeather } from '../hooks/useWeather'

export type WeatherType = {
    date: string
    description: string
    icon: string
    maxTemp: number
    minTemp: number
}

const Items = () => {
    const { weathers, isLoading, isError } = useWeather()
    console.log(weathers)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    return (
        <>
            {weathers.map((weather: WeatherType) => {
                return <Item key={weather.date} weather={weather} />
            })}
        </>
    )
}

export default Items

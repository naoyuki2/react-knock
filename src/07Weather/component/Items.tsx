import { useEffect, useState } from 'react'
import Item from './Item'
export type WeatherType = {
    date: string
    description: string
    icon: string
    maxTemp: number
    minTemp: number
}
const Items = () => {
    const [weathers, setWeathers] = useState<WeatherType[]>([])
    useEffect(() => {
        const access_weather = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=saga&units=metric&lang=ja&date='2023-12-11'&APPID=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }`,
            )
            const body = await response.json()
            const weatherData = []
            for (let i = 0; i < 3; i++) {
                const dailyForecast = body.list.slice(i * 8, (i + 1) * 8)
                const maxTemp = Math.max(
                    ...dailyForecast.map((data: any) => data.main.temp),
                )
                const minTemp = Math.min(
                    ...dailyForecast.map((data: any) => data.main.temp),
                )
                weatherData.push({
                    date: dailyForecast[0].dt_txt.substr(0, 10),
                    description: dailyForecast[0].weather[0].description,
                    icon: `https://openweathermap.org/img/wn/${dailyForecast[0].weather[0].icon}@2x.png`,
                    maxTemp: maxTemp,
                    minTemp: minTemp,
                })
            }
            setWeathers(weatherData)
            console.log(body)
        }
        return () => {
            access_weather()
        }
    }, [])
    return (
        <>
            {weathers.map((weather: WeatherType) => {
                return <Item key={weather.date} weather={weather} />
            })}
        </>
    )
}

export default Items

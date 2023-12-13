import useSWR from 'swr'

const fetcher = async (key: string) => {
    return fetch(key).then((res) => res.json() as Promise<any>)
}

export const useWeather = () => {
    const { data, error, isLoading } = useSWR(
        `https://api.openweathermap.org/data/2.5/forecast?q=saga&units=metric&lang=ja&APPID=${
            import.meta.env.VITE_WEATHER_API_KEY
        }`,
        fetcher,
    )

    const weatherData = []
    if (data && data.list) {
        for (let i = 0; i < 3; i++) {
            const dailyForecast = data.list.slice(i * 8, (i + 1) * 8)
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
    }

    return {
        weathers: weatherData,
        isLoading,
        isError: error,
    }
}

import { WeatherType } from './Items'

type ItemProps = {
    weather: WeatherType
}

const Item: React.FC<ItemProps> = ({ weather }) => {
    return (
        <div
            key={weather.date}
            className="flex flex-col text-center shadow p-3"
        >
            <h2 className="text-2xl">{weather.date}</h2>
            <div className="mx-auto">
                <img src={weather.icon} alt="weather" />
            </div>
            <h2 className="text-xl pb-3">{weather.description}</h2>
            <p>
                {weather.minTemp}℃/{weather.maxTemp}℃
            </p>
        </div>
    )
}

export default Item

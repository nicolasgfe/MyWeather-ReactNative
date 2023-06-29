import { useEffect, useState } from "react";
import { Coordinates, WeatherResult } from "../../../../data/model";
import { getWeather } from "../../../../data/service/WeatherService";

const useWeather = ({ lat, lon }: Coordinates) => {
    const [data, setData] = useState<WeatherResult>()
    useEffect(() => {
        buscarInfo();
    }, [])

    const buscarInfo = async () => {
        setData(await getWeather({ lat, lon }))
    }

    return data
};

export default useWeather;

import { ApiConfig } from "../../config/api";
import { httpClient } from "../../infra/http";
import { Coordinates, WeatherResult } from "../model";

export const getWeather = async (
    { lat, lon }: Coordinates
): Promise<WeatherResult> => {
    const endereco = ApiConfig.GET_WEATHER(lat, lon);
    const result = await httpClient.get<WeatherResult>(endereco);

    return result.data
};

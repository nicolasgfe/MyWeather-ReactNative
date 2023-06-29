import { Text } from "react-native";
import React, { useCallback } from "react";
import { useWeather } from "./hooks/useWeather";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { HomeRouteProp } from "./interface";
import { WeatherIcon } from "../../components/icon";
import { useWeatherType } from "./hooks/useWeatherType";
import { Container, InfoColumn, InfosRow } from "./style";
import { useState } from "react"
import { WeatherIconProps } from "../../components/icon/interface";
import { LoadingView } from "../../components/loading";

const Home = () => {
    const { params: { lat, lon } } = useRoute<HomeRouteProp>()
    const [weatherType, setWeatherType] = useState<WeatherIconProps>();
    const data = useWeather({ lat, lon });

    useFocusEffect(
        useCallback(() => {
            const buscaCor = () => {
                if (data !== undefined) {
                    setWeatherType(useWeatherType(data?.cod));
                }
            }
            return () => buscaCor()
        }, [])
    );

    return (
        <Container>
            {(weatherType?.type !== undefined) && (
                <WeatherIcon type={weatherType?.type} />
            )}
            <Text style={{ fontSize: 50, fontWeight: "bold" }}>
                {data?.main.temp} ºC
            </Text>
            <Text style={{ fontSize: 20 }}>
                {data?.name}
            </Text>
            <Text style={{ fontSize: 13 }}>
                Sensação termica {data?.main.feels_like}ºC
            </Text>

            <InfosRow>
                <InfoColumn>
                    <Text style={{ fontWeight: "bold" }}>vento</Text>
                    <Text>{data?.wind.speed}</Text>
                </InfoColumn>
                <InfoColumn>
                    <Text style={{ fontWeight: "bold" }}>umidade</Text>
                    <Text>{data?.main.humidity}</Text>
                </InfoColumn>

                <InfoColumn>
                    <Text style={{ fontWeight: "bold" }}>nuvens</Text>
                    <Text>{data?.clouds.all}</Text>
                </InfoColumn>
            </InfosRow>
        </Container>

    )
};

export default Home;

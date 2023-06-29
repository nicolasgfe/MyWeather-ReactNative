import Geolocation from "@react-native-community/geolocation";
import { useEffect, useState } from "react";
import { UseLocationResult } from "./interface";

const useLocation = (): UseLocationResult => {
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setLoading(true)
        Geolocation.getCurrentPosition(
          response => {
            setLat(response.coords.latitude);
            setLon(response.coords.longitude);
            setSuccess(true);
            setLoading(false);
          },
          error => {
            setSuccess(false);
            console.log(`Não foi possivel obter a localização: ${error.message}`);
            setLoading(false);
          },
          {
            enableHighAccuracy: true,
            maximumAge: 0,
          },
        );
      }, []);
      
    // useEffect(()=> {
    //     setLoading(false)
    //     setSuccess(true);
    // }, [lon, lat])


    return { 
      lat,
      lon,
      loading,
      success,
    }
};

export default useLocation;

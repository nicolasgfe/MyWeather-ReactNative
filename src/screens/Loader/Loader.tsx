import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { LoadingView } from "../../components/loading";
import { AppNavigatorProps } from "../../navigation/app";
import { Home } from "../Home";
import { useLocation, UseLocationResult } from "./hooks/useLocation";

const Loader = () => {
  const { lat, loading, lon, success } = useLocation()
  const navigator = useNavigation<AppNavigatorProps>()
  console.log(lat);
  console.log(loading);
  console.log(lon);
  console.log(success);
  

  const openHome = () => {
    navigator.navigate('Home', { lat, lon });
  }
  return (
    <>
      {(loading) && (
        <LoadingView />
      )}
      {(success === true) ? (
        openHome()
      ) : (
        <View>
          <Text> Não foi possível obter sua localização</Text>
        </View>
      )}
    </>

  );

};

export default Loader;

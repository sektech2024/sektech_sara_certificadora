import * as React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";

//import { getPropriedade } from "@/rotas/_lista_propriedade_user";
import { getDadosPropriedade } from "@/rotas/lista_propriedade_user";
import { getPropriedade } from "@/rotas/_lista_propriedade_user";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: -14.9313822,
  lng: -50.9834575,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDxYI6xyX1DJ3uNlL8fzp3-HukKBfioBV4",
  });

  const [map, setMap] = React.useState(null);

  //Return propriedades usuário mapa
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropriedade();
        setDados(data);
      } catch (error) {
        throw new error();
      }
    };

    fetchData();
  }, []);

  const [selectedMarker, setSelectedMarker] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="map">
      <h2 className="map-h2">Lista de Propriedades</h2>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        options={{
          disableDefaultUI: true,
        }}
      >
        {dados?.Lista?.map((propItem) => (
          <Marker
            key={propItem.idPropriedade} // Use o ID da propriedade como chave
            position={{ lat: propItem.geoLatitude, lng: propItem.geoLongitude }}
            onClick={() => {
              setSelectedMarker(propItem.idPropriedade);
            }}
          >
            {selectedMarker === propItem.idPropriedade && (
              <InfoWindow
                position={{
                  lat: propItem.geoLatitude,
                  lng: propItem.geoLongitude,
                }}
                onCloseClick={() => {
                  setSelectedMarker(propItem.idPropriedade);
                }}
              >
                <div>
                  <h1>{propItem.dgNome}</h1>
                  <p>Produtor: {propItem.ehProdutor}</p>
                  <p>UF: {propItem.endUf}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Map);

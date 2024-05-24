import * as React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";

//import { getDadosPropriedade } from "@/rotas/lista_propriedade_user";
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

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

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
        {/* Render custom markers */}
        {dados?.Lista?.map((marker) => (
          <Marker
            key={marker.idPropriedade}
            position={{ lat: marker.geoLatitude, lng: marker.geoLongitude }}
            onClick={() => handleMarkerClick(marker)}
          >
            {/* Render InfoWindow for each marker */}
            {selectedMarker === marker && (
              <InfoWindow
                position={{
                  lat: marker.geoLatitude,
                  lng: marker.geoLongitude,
                }}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div>
                  <h1>Informações da Propriedade</h1>
                  <p>Latitude: {marker.geoLatitude}</p>
                  <p>Longitude: {marker.geoLongitude}</p>
                  <p>Nome: {marker.dgNome}</p>
                  <p>Tipo Propriedade: {marker.dgTipopropriedade}</p>
                  <p>UF: {marker.endUf}</p>
                  <p>Municipio: {marker.endMunicipio}</p>
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

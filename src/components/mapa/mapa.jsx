import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";

import { getPropriedade } from "@/rotas/_lista_propriedade_user";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: -14.9313822,
  lng: -50.9834575,
};

let Local = [
  {
    lat: -17.783968, 
    lng: -50.930969,
  },
  {
    lat: -17.783003, 
    lng: -50.918045,
  },
];

let Propriedade = [
  {
    idPropriedade: 1,
    dgNome: "Fazenda Pira",
    endUf: "GO",
    ehProdutor: "Fabio",
  },
  {
    idPropriedade: 2,
    dgNome: "Fazenda Brazil",
    endUf: "PE",
    ehProdutor: "Pablo Marçal",
  },
];

console.log(Local);

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDxYI6xyX1DJ3uNlL8fzp3-HukKBfioBV4",
  });

  const [map, setMap] = React.useState(null);

  let mapaPropriedade = getPropriedade(); //concluir logica de mapa

  const [selectedMarker, setSelectedMarker] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
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
        options={
          {
            disableDefaultUI: true
          }
        }
      >
        {Local.map((location, index) => (
          <Marker
            key={index}
            position={location}
            onClick={() => {
              setSelectedMarker({
                ...location,
                ...Propriedade[index],
              });
            }}
          >
            {selectedMarker &&
              selectedMarker.idPropriedade ===
                Propriedade[index].idPropriedade && (
                <InfoWindow
                  position={location}
                  onCloseClick={() => {
                    setSelectedMarker(null);
                  }}
                >
                  <div>
                    <h1>{Propriedade[index].dgNome}</h1>
                    <p>Produtor: {Propriedade[index].ehProdutor}</p>
                    <p>UF: {Propriedade[index].endUf}</p>
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

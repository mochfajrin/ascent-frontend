/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { getTpsData } from "../api/fetching";

const Map = ({ height, weight, zoom, show, onMarkerClick, shadow }) => {
  const [tpsData, setTpsData] = useState([]);
  // useEffect(() => {
  //   getTpsData()
  //     .then((res) => {
  //       setTpsData(res);
  //     })
  //     .catch((err) => {
  //       throw new Error(err.message);
  //     });
  // }, []);

  const customIcon = new Icon({
    iconUrl: "/icons/garbage.png",
    iconSize: [30, 30],
  });

  // if (tpsData.length === 0) {
  //   return;
  // }
  return (
    <>
      <MapContainer
        className={`h-${height} w-${weight} rounded-xl z-0 shadow-${shadow}`}
        center={[-0.433603, 116.984715]}
        zoom={zoom}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TVTNPGIyfvfalfAu4mN4"
          maxZoom={18}
        />

        {tpsData.length > 0 &&
          tpsData.map((data) => {
            if (data.is_clean === false) {
              return (
                <Marker
                  position={[
                    data.latitude.toFixed(6),
                    data.longitude.toFixed(6),
                  ]}
                  icon={customIcon}
                  key={data.id}
                  eventHandlers={{
                    click: () => {
                      onMarkerClick(data);
                    },
                  }}
                >
                  <Popup>
                    <p>Alamat : {data.address}</p>
                    <p>Latitude : {data.latitude.toFixed(6)}</p>
                    <p>Longitude : {data.longitude.toFixed(6)}</p>
                    {show && <Link>Lihat selangkapnya</Link>}
                  </Popup>
                </Marker>
              );
            }
          })}

        {/* <Marker
          position={[
            tpsData.data[0].latitude.toFixed(6),
            tpsData.data[0].longitude.toFixed(6),
          ]}
          icon={customIcon}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </>
  );
};

export default Map;

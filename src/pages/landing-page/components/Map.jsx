/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";

const Map = ({ height, weight, zoom, onMarkerClick, shadow }) => {
  const mapData = [
    {
      latitude: -1.14996,
      longitude: 116.861754,
      address:
        "Jl. Soekarno Hatta No.KM 15, Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127",
    },
    {
      latitude: -6.302146,
      longitude: 106.654423,
      address:
        "Jl. BSD Green Office Park Jl. BSD Grand Boulevard, Sampora, BSD, Kabupaten Tangerang, Banten 15345",
    },
    {
      latitude: -7.332573,
      longitude: 110.509433,
      address:
        " Jl. DR. Muwardi No.45A, Kutowinangun Kidul, Kec. Tingkir, Kota Salatiga, Jawa Tengah 50742",
    },
  ];

  const customIcon = new Icon({
    iconUrl: "./icons/pin.png",
    iconSize: [30, 30],
  });

  return (
    <>
      <MapContainer
        className={`h-${height} w-${weight} rounded-xl z-0 shadow-${shadow}`}
        center={[0.110819, 114.73348]}
        zoom={zoom}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TVTNPGIyfvfalfAu4mN4"
          maxZoom={18}
        />

        {mapData.map((data, i) => (
          <Marker
            position={[data.latitude.toFixed(6), data.longitude.toFixed(6)]}
            key={i}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                onMarkerClick(data);
              },
            }}
          >
            <Popup>
              <p>{data.address}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;

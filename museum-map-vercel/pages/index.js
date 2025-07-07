
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const craterPosition = [26.9895, 42.2458];
const craterBounds = [
  [26.9845, 42.2408],
  [26.9945, 42.2408],
  [26.9945, 42.2508],
  [26.9845, 42.2508],
];

export default function CraterMap() {
  const [selectedLang, setSelectedLang] = useState("ar");
  const content = {
    ar: {
      name: "فوهة الهتيمة",
      desc:
        "مرحبًا بكم في فوهة الهتيمة، موطن الفوهات البركانية الضحلة والتي كانت موقعا ً للبحيرات الساخنة المثيرة للإعجاب...",
    },
    en: {
      name: "Al Hutaymah Crater",
      desc:
        "Welcome to Al Hutaymah, home to the impressive Hutaymah Maar, which stands as one of the finest examples...",
    },
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-white p-4 overflow-y-auto shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {selectedLang === "ar" ? "المواقع" : "Sites"}
          </h2>
          <button
            onClick={() => setSelectedLang(selectedLang === "ar" ? "en" : "ar")}
            className="px-2 py-1 border rounded text-sm"
          >
            {selectedLang === "ar" ? "English" : "العربية"}
          </button>
        </div>
        <div className="cursor-pointer border p-2 rounded hover:bg-gray-100">
          <img
            src="/فوهة الهتيمة.jpg"
            alt="Crater"
            className="rounded mb-2"
          />
          <h3 className="font-semibold text-lg mb-1">{content[selectedLang].name}</h3>
          <p className="text-sm text-gray-700 line-clamp-4">
            {content[selectedLang].desc}
          </p>
        </div>
      </div>

      <div className="w-2/3 h-full">
        <MapContainer center={craterPosition} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polygon positions={craterBounds} pathOptions={{ color: "red" }} />
          <Marker position={craterPosition}>
            <Popup>{content[selectedLang].name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

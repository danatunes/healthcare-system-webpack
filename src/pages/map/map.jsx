import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} className="w-[300px] h-[300px]">
      {/*<Marker position={center} />*/}
    </GoogleMap>
  );
}

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const MapSection = () => (
    <LoadScript googleMapsApiKey="AIzaSyBg3zH3KMal8ApDRBnO72mkrPXp_OQqNUc">
        <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={{ lat: 23.2599, lng: 77.4126 }}
            zoom={14}
        >
            <Marker position={{ lat: 23.2599, lng: 77.4126 }} />
        </GoogleMap>

    </LoadScript>
);

export default MapSection;
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {LatLng} from "leaflet";

interface PropTypes {
	center: location;
	zoom: number;
}

export default function Map({ center, zoom }: PropTypes) {
	const newCenter = new LatLng(center.latitude,  center.longitude)

	return (
		<MapContainer center={newCenter} zoom={zoom} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={newCenter}>
				<Popup>A pretty CSS3 popup. &lt;br /&gt; Easily customizable.</Popup>
			</Marker>
		</MapContainer>
	);
}

import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
const Map = dynamic(() => import("../components/map"), { ssr:false })

interface location {
	latitude: number,
	longitude: number
}

export default function Home() {
	const [location, setLocation] = useState<location>();

	//Get lat / lang of user
	useEffect(() => {
		if('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				const { latitude, longitude } = coords;
				setLocation({latitude, longitude})
			})
		}
	}, []);

	return (
		<>
			<p>{location?.latitude}</p>
			<p>{location?.longitude}</p>
		</>
	)
}

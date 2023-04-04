'use client';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
	const [location, setLocation] = useState<location>();

	useEffect(() => {
		if (typeof window !== "undefined") {
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition(({ coords }) => {
					const { latitude, longitude } = coords;
					setLocation({latitude, longitude})
				});
			}
		}
	})

	return (
		<Map center={location!} zoom={13} />
	);
}

import RoomCard from "@/components/admin/RoomCard";
import React from "react";

export default function RoomsPage() {
	return (
		<div className="h-full px-4 py-4 space-y-4">
			<h2 className="text-3xl text-text-muted">Rooms</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<RoomCard />
				<RoomCard />
				<RoomCard />
				<RoomCard />
			</div>
		</div>
	);
}

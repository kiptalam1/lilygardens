import React from "react";
import Link from "next/link";
export default function RoomCard() {
	return (
		<Link
			href="/admin/rooms/room"
			className="bg-card p-4 rounded-xl space-y-3 border border-border hover:border-brand/30 transition duration-150">
			<div>
				<h3 className="font-semibold truncate ">A1</h3>
				<p className="text-sm text-text-muted">capacity</p>
			</div>

			<div className="flex items-center justify-between text-sm">
				<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-success/20 text-success">
					Vaccant
				</span>

				<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface/40 text-text-muted">
					5000
				</span>
			</div>
		</Link>
	);
}

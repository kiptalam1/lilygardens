import React from "react";

type StatsTypes = {
	label: string;
	value: string;
};
export default function StatsCard({ label, value }: StatsTypes) {
	return (
		<div className="bg-card rounded-lg p-4 space-y-4">
			<h2 className="text-text-muted"> {label}</h2>
			<p className="text-3xl font-semibold text-text">{value}</p>
		</div>
	);
}

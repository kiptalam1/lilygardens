import QuickActions from "@/components/admin/QuickActions";
import StatsCard from "@/components/admin/StatsCard";
import React from "react";

export default function DashboardPage() {
	return (
		<div className="h-full px-4 py-6 space-y-4">
			<h2 className="text-3xl text-text-muted ">Dashboard</h2>
			{/* stats */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<StatsCard label="Occupancy" value="80%" />
				<StatsCard label="Income" value="Ksh 30000" />
				<StatsCard label="Overdue" value="2" />
				<StatsCard label="Vacant" value="1" />
			</div>

			{/* quick actions */}
			<QuickActions />
		</div>
	);
}

import TenantCard from "@/components/admin/TenantCard";
import React from "react";

export default function TenantsPage() {
	return (
		<div className="h-full px-4 py-6 space-y-4">
			<h2 className="text-3xl text-text-muted">Tenants</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<TenantCard />
				<TenantCard />
				<TenantCard />
				<TenantCard />
				<TenantCard />
			</div>
		</div>
	);
}

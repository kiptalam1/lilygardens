import Link from "next/link";
import React from "react";

export default function TenantCard() {
	return (
		<Link
			href="/admin/tenants/user"
			className="bg-card p-4 rounded-xl space-y-3 border border-border">
			<div>
				<h3 className="font-semibold truncate ">Adams Kiptalam</h3>
				<p className="text-sm text-text-muted">Room A1</p>
			</div>

			<div className="flex items-center justify-between text-sm">
				<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-success/20 text-success">
					Paid
				</span>

				<span className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand/10 text-brand">
					Active
				</span>
			</div>
		</Link>
	);
}

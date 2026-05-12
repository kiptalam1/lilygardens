import React from "react";

export default function PaymentsPage() {
	return (
		<div className="min-h-screen px-4 py-4 space-y-4">
			<h2 className="text-3xl text-text-muted">Payments</h2>

			{/* desktop table */}
			<div className="hidden md:block overflow-x-auto">
				<table className="border border-border text-sm w-full rounded-lg table-fixed">
					<thead className="text-text-muted  text-left">
						<tr className="border-b-2 border-zinc-400">
							<th className="p-2">Tenant</th>
							<th className="p-2">Room</th>
							<th className="p-2">Amount</th>
							<th className="p-2">Method</th>
							<th className="p-2">Status</th>
							<th className="p-2">Ref.</th>
							<th className="p-2">Date</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-border">
						<tr className="border-b border-border">
							<td className="p-2 truncate">Adams Kiptalam</td>
							<td className="p-2">A1</td>
							<td className="p-2">12,000</td>
							<td className="p-2">cash</td>
							<td className="p-2">
								<span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
									Paid
								</span>
							</td>
							<td className="p-2 font-mono text-xs whitespace-nowrap truncate max-w-25">
								DCP2352JFHG
							</td>
							<td className="p-2 text-xs">2026-05-01</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* mobile cards */}
			<div className="md:hidden space-y-3">
				<div className="border border-border rounded-xl p-4 space-y-2">
					<div className="flex justify-between">
						<p className="font-medium">Adams Kiptalam</p>

						<span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
							Paid
						</span>
					</div>

					<div className="text-sm space-y-1">
						<p className="text-text-muted">Room A1</p>
						<p>KES 12,000 · Cash</p>
						<p className="text-xs text-text-muted font-mono">DCP2352JFHG</p>
						<p className="text-xs text-text-muted">2026-05-01</p>
					</div>
				</div>
			</div>
			<div className="flex justify-end gap-4 items-center mt-8">
				<button
					type="button"
					className="border border-border px-2 py-1 text-sm font-semibold text-text-muted rounded-md cursor-pointer hover:bg-bg transition-all duration-100">
					&larr; Prev
				</button>
				<span>page 1</span>
				<button
					type="button"
					className="border border-border px-2 py-1 text-sm font-semibold text-text-muted rounded-md hover:bg-bg transition-all duration-100 cursor-pointer">
					Next &rarr;
				</button>
			</div>
		</div>
	);
}

"use client";
import { inter } from "@/app/page";
import React, { useState } from "react";
import CreateUnitForm from "./CreateUnitForm";

export default function QuickActions() {
	const [showUnitModal, setShowUnitModal] = useState(false);
	return (
		<div className="space-y-2">
			<h3 className={`text-lg font-bold ${inter.className}`}>Quick Actions</h3>
			<div className="flex flex-col gap-2 items-start">
				{/* unit modal */}
				{showUnitModal && (
					<CreateUnitForm open={showUnitModal} setOpen={setShowUnitModal} />
				)}

				<button
					type="button"
					onClick={() => setShowUnitModal(true)}
					className="bg-brand text-white p-2 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-175">
					Add Unit
				</button>
				<button
					type="button"
					className="border border-text p-2 rounded-lg cursor-pointer hover:opacity-60 transition-opacity duration-175">
					Add Household
				</button>
				<button
					type="button"
					className="border border-border p-2 rounded-lg cursor-pointer hover:opacity-60 transition-opacity duration-175">
					Register Payment
				</button>
			</div>
		</div>
	);
}

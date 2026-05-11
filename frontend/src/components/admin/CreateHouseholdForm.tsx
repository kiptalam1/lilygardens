import React, { SetStateAction, SyntheticEvent, useState } from "react";
import OccupantFields, { TenantData } from "./OccupantFields";

export type OccupantsData = {
	roomId: string;
	householdType: string;
	tenants: TenantData[];
	startDate: string;
	endDate: string | null;
};

const tenantFields = {
	fullName: "",
	nationalId: "",
	phone: "",
	email: "",
};

export default function CreateHouseholdForm({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
	const [formData, setFormData] = useState<OccupantsData>({
		roomId: "",
		householdType: "",
		tenants: [tenantFields],
		startDate: "",
		endDate: "",
	});

	if (!open) {
		return null;
	}

	function closeModal() {
		setOpen(false);
	}

	function addTenant() {
		setFormData((prev) => ({
			...prev,
			tenants: [...prev.tenants, tenantFields],
		}));
	}

	function removeTenant(index: number) {
		setFormData((prev) => ({
			...prev,
			tenants: prev.tenants.filter((_, i) => i !== index),
		}));
	}

	function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();

		closeModal();
	}
	return (
		<div
			role="dialog"
			aria-modal="true"
			onClick={closeModal}
			className="bg-black/50 z-50 inset-0 fixed backdrop-blur-sm flex flex-col items-center justify-center gap-2 p-4">
			<form
				onClick={(e) => e.stopPropagation()}
				onSubmit={handleSubmit}
				className="w-full max-w-2xl bg-card px-4 py-6 rounded-lg space-y-4 max-h-5/6 overflow-y-auto scroll-smooth scrollbar">
				<h1 className="text-2xl text-brand ">Add Occupants</h1>

				{/* select room */}
				<div className="flex flex-col gap-2">
					<label
						htmlFor="name"
						className="text-sm font-semibold text-text-muted">
						Select Room
					</label>

					<select
						id="name"
						name="name"
						required
						className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand w-full ">
						<option value="">Select Room</option>
						<option value="A1">A1</option>
						<option value="A2">A2</option>
						<option value="A3">A3</option>
					</select>
				</div>
				{/* household type */}
				<div className="space-y-2">
					<p className="text-sm font-semibold text-text-muted">
						Type of Household:
					</p>
					<div className="flex gap-2 items-center">
						<input
							id="family"
							name="householdType"
							value="family"
							type="radio"
							defaultChecked
							className="w-4 h-4 appearance-none border border-zinc-400 rounded-full checked:border-brand checked:border-4 outline-none"></input>
						<label htmlFor="family">Family</label>
					</div>

					<div className="flex gap-2 items-center">
						<input
							id="shared"
							name="householdType"
							type="radio"
							value="shared"
							className="w-4 h-4 appearance-none border border-zinc-400 rounded-full checked:border-brand checked:border-4 outline-none"></input>
						<label htmlFor="shared">Shared</label>
					</div>
				</div>

				{/* Occupants */}
				{formData.tenants.map((tenant, index) => (
					<OccupantFields
						key={index}
						index={index}
						tenant={tenant}
						formData={formData}
						setFormData={setFormData}
						onRemove={() => removeTenant(index)}
					/>
				))}

				<div className="flex justify-end">
					<button
						type="button"
						onClick={addTenant}
						className="border border-text-muted py-1 px-2 rounded-lg cursor-pointer text-text-muted text-sm font-semibold hover:opacity-70 transition-opacity duration-150">
						+ Add Occupant
					</button>
				</div>

				{/* start and end date */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label
							htmlFor="startDate"
							className="text-sm text-text-muted font-semibold">
							Start Date (MM/DD/YYYY)
						</label>
						<input
							type="date"
							name="startDate"
							id="startDate"
							autoComplete="off"
							value={formData.startDate}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									[e.target.name]: e.target.value,
								}))
							}
							required
							placeholder="select date"
							className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full"
						/>
					</div>
					<div>
						<label
							htmlFor="endDate"
							className="text-sm text-text-muted font-semibold">
							End Date (MM/DD/YYYY)(Optional)
						</label>
						<input
							type="date"
							name="endDate"
							id="endDate"
							autoComplete="off"
							value={formData.endDate as string}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									[e.target.name]: e.target.value,
								}))
							}
							placeholder="select date"
							className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full"
						/>
					</div>
				</div>

				{/* buttons */}
				<div className="flex gap-4 mt-6 justify-end">
					<button
						type="button"
						onClick={closeModal}
						className="px-4 py-2 rounded-lg border border-border text-sm hover:bg-surface transition cursor-pointer">
						Cancel
					</button>
					<button
						type="submit"
						className="px-4 py-2 rounded-lg bg-brand text-white text-sm font-medium hover:opacity-80 transition cursor-pointer">
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

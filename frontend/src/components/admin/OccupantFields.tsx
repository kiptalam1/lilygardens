import React, { ChangeEvent, SetStateAction } from "react";
import { OccupantsData } from "./CreateHouseholdForm";
import { BiTrash } from "react-icons/bi";

export type TenantData = {
	fullName: string;
	nationalId: string;
	phone: string;
	email: string | null;
	startDate: string;
	endDate: string | null;
};

export default function OccupantFields({
	index,
	tenant,
	formData,
	setFormData,
	onRemove,
}: {
	index: number;
	tenant: TenantData;
	formData: OccupantsData;
	setFormData: React.Dispatch<SetStateAction<OccupantsData>>;
	onRemove: () => void;
}) {
	function handleTenantTextInputChange(e: ChangeEvent<HTMLInputElement>) {
		const updatedTenants = [...formData.tenants];
		updatedTenants[index] = {
			...updatedTenants[index],
			[e.target.name]: e.target.value,
		};

		setFormData((prev) => ({ ...prev, tenants: updatedTenants }));
	}

	function handleTenantNumericInputChange(e: ChangeEvent<HTMLInputElement>) {
		const updatedTenants = [...formData.tenants];
		updatedTenants[index] = {
			...updatedTenants[index],
			[e.target.name]: e.target.value.replace(/[\D]/g, ""),
		};

		setFormData((prev) => ({ ...prev, tenants: updatedTenants }));
	}

	return (
		<div className="space-y-3 mt-2 border border-zinc-400 rounded-lg p-2">
			<div className="flex flex-col gap-0.5">
				<label
					htmlFor="fullName"
					className="text-sm text-text-muted font-semibold">
					Full Name:
				</label>
				<input
					type="text"
					name="fullName"
					id="fullName"
					autoComplete="off"
					value={tenant.fullName}
					onChange={handleTenantTextInputChange}
					required
					placeholder="Enter tenant's full names"
					className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full"
				/>
			</div>
			<div className="flex flex-col gap-0.5">
				<label
					htmlFor="nationalId"
					className="text-sm text-text-muted font-semibold">
					National ID:
				</label>
				<input
					type="text"
					name="nationalId"
					id="nationalId"
					autoComplete="off"
					value={tenant.nationalId}
					onChange={handleTenantNumericInputChange}
					inputMode="numeric"
					maxLength={8}
					required
					placeholder="Enter tenant's national ID"
					className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full"
				/>
			</div>

			<div className="flex flex-col gap-0.5">
				<label
					htmlFor="phone"
					className="text-sm text-text-muted font-semibold">
					Phone Number:
				</label>
				<input
					type="tel"
					name="phone"
					id="phone"
					autoComplete="off"
					value={tenant.phone}
					onChange={handleTenantNumericInputChange}
					inputMode="tel"
					maxLength={13}
					required
					placeholder="Enter tenant's phone number"
					className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full"
				/>
			</div>

			<div className="flex flex-col gap-0.5">
				<label
					htmlFor="email"
					className="text-sm text-text-muted font-semibold">
					Email:
				</label>
				<input
					type="email"
					name="email"
					id="email"
					autoComplete="off"
					value={tenant.email as string}
					onChange={handleTenantTextInputChange}
					inputMode="email"
					placeholder="Enter tenant's email address"
					className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full"
				/>
			</div>
			<div className="flex justify-end">
				<button
					type="button"
					onClick={onRemove}
					aria-label="delete tenant"
					className=" cursor-pointer text-danger hover:text-danger/60 transition duration-150">
					<BiTrash size={20} />
				</button>
			</div>
		</div>
	);
}

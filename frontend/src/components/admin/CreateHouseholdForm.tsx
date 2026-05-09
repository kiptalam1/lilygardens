import React, { SetStateAction, SyntheticEvent } from "react";

export default function createHouseholdForm({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
	if (!open) {
		return null;
	}

	function closeModal() {
		setOpen(false);
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
				className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg bg-card px-4 py-6 rounded-lg space-y-4">
				<h1 className="text-2xl text-brand ">Assign Occupants</h1>

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
						<option value="" selected>
							Select Room
						</option>
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
							checked
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

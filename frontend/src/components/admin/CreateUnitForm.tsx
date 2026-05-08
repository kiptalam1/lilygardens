import React, { SetStateAction, SyntheticEvent } from "react";

export default function CreateUnitForm({
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
				<h1 className="text-2xl text-brand ">Create a new Room</h1>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="name"
						className="text-sm font-semibold text-text-muted">
						Enter room name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full"
					/>
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

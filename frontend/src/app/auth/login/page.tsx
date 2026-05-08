"use client";
import { useState } from "react";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="flex items-center h-full w-full">
			<form className="flex flex-col gap-4 bg-card mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-lg py-10 px-6 rounded-lg">
				{/* heading */}
				<div className="text-center mb-4">
					<h1 className="text-3xl text-brand/90">Lily Gardens</h1>
				</div>

				{/* national id */}
				<div>
					<input
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						maxLength={8}
						required
						autoComplete="off"
						name="nationalId"
						id="nationalId"
						aria-label="Enter your national Id"
						placeholder="National ID"
						className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full"
					/>
				</div>

				{/* password */}
				<div className="relative">
					<input
						type={showPassword ? "text" : "password"}
						required
						name="password"
						id="password"
						aria-label="Enter your password"
						placeholder="Password"
						className="border border-border rounded-lg px-4 py-1 outline-none focus:ring-2 focus:ring-brand placeholder:text-sm text-lg w-full pr-16"
					/>
					<button
						type="button"
						aria-label={showPassword ? "Hide password" : "Show password"}
						onClick={() => setShowPassword(!showPassword)}
						className="absolute inset-y-0 right-4 text-sm text-brand hover:opacity-70 cursor-pointer">
						{showPassword ? "Hide" : "Show"}
					</button>
				</div>

				{/* login button */}
				<button
					type="submit"
					className="text-lg w-full bg-brand rounded-lg mt-4 text-white/80 p-1.5 font-semibold hover:opacity-70 transition-opacity duration-150 cursor-pointer">
					Login
				</button>
			</form>
		</div>
	);
}

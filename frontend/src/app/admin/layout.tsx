"use client";
import Sidebar from "@/components/admin/Sidebar";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

function AdminLayout({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	useEffect(() => {
		if (sidebarOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [sidebarOpen]);

	return (
		<div className="h-screen bg-surface text-text grid md:grid-cols-[240px_1fr]">
			{/* desktop sidebar */}
			<aside className="hidden md:block border-r border-border">
				<Sidebar />
			</aside>

			{/* mobile sidebar */}
			{sidebarOpen && (
				<div className="fixed inset-0 z-50 md:hidden">
					<div
						className="inset-0 bg-black/50 absolute"
						onClick={() => setSidebarOpen(false)}
					/>
					<aside className="absolute h-full w-64 top-0 left-0 bg-card border-r border-border rounded-r-sm">
						<Sidebar />
					</aside>
				</div>
			)}

			<div className="flex flex-col gap-1 h-full">
				<header className=" flex md:justify-end p-4 items-center">
					<button
						type="button"
						aria-label="menu"
						onClick={() => setSidebarOpen(true)}
						className="md:hidden cursor-pointer">
						<BiMenu size={24} />
					</button>
				</header>
				<main>{children}</main>
			</div>
		</div>
	);
}

export default AdminLayout;

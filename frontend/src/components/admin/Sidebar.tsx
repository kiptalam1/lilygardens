import { inter } from "@/app/page";
import Link from "next/link";
import React from "react";
import { GrSettingsOption } from "react-icons/gr";

import {
	MdOutlineDashboardCustomize,
	MdOutlinePayment,
	MdOutlinePeopleOutline,
} from "react-icons/md";
import { PiHouseSimpleBold } from "react-icons/pi";

export default function Sidebar() {
	return (
		<div className="bg-card h-full flex flex-col gap-4 py-4">
			<div className="px-2">
				<h1 className={`text-brand font-semibold text-xl ${inter.className}`}>
					Lily Gardens
				</h1>
			</div>

			<div className="p-2 hover:bg-surface transition duration-150 text-sm md:text-lg font-semibold rounded-md flex items-center gap-4">
				<MdOutlineDashboardCustomize size={24} />
				<Link href="/admin/dashboard" className="">
					Dashboard
				</Link>
			</div>

			<div className="p-2 hover:bg-surface transition duration-150 text-sm md:text-lg font-semibold rounded-md flex items-center gap-4">
				<MdOutlinePeopleOutline size={24} />
				<Link href="/admin/tenants" className=" ">
					Tenants
				</Link>
			</div>
			<div className="p-2 hover:bg-surface transition duration-150 text-sm md:text-lg font-semibold rounded-md flex items-center gap-4">
				<MdOutlinePayment size={24} />
				<Link href="/" className="">
					Payments
				</Link>
			</div>

			<div className="p-2 hover:bg-surface transition duration-150 text-sm md:text-lg font-semibold rounded-md flex items-center gap-4">
				<PiHouseSimpleBold size={24} />
				<Link href="/admin/rooms" className="">
					Rooms
				</Link>
			</div>

			<div className="p-2 hover:bg-surface transition duration-150 text-sm md:text-lg font-semibold rounded-md flex items-center gap-4">
				<GrSettingsOption size={24} />
				<Link href="/" className=" ">
					Settings
				</Link>
			</div>
		</div>
	);
}

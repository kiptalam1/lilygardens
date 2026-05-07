import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="bg-surface h-full py-4 rounded-sm flex flex-col justify-center">
			<div className="space-y-4 text-center">
				<h1 className={`text-4xl font-semibold text-brand ${inter.className}`}>
					Lily Gardens
				</h1>

				<p className="text-xl">Welcome home</p>
				<p className="text-text-muted">
					Everything you need for life at Lily Gardens.
				</p>
			</div>
		</div>
	);
}

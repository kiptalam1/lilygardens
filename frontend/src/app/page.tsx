import { Inter } from "next/font/google";
import Link from "next/link";
export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="bg-surface h-full py-4 rounded-sm flex flex-col justify-center gap-6">
			<div className="space-y-4 text-center">
				<h1 className={`text-5xl font-semibold text-brand ${inter.className}`}>
					Lily Gardens
				</h1>

				<p className="text-2xl">Welcome home</p>
				<p className="text-text-muted text-lg">
					Everything you need for life at Lily Gardens.
				</p>
			</div>

			{/* login */}
			<Link
				href="/auth/login"
				className="text-center text-brand hover:underline hover:underline-offset-2 hover:opacity-70 transition-all duration-150">
				Log in
			</Link>
		</div>
	);
}

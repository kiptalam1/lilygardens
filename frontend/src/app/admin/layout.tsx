import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
	return <div className="min-h-screen bg-surface text-text">{children}</div>;
}

export default AdminLayout;

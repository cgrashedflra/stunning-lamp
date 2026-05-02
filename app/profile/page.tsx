"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            // optional: redirect guests to home
            router.push("/");
        }
    }, [status, router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 text-white">
                Loading...
            </div>
        );
    }

    const user = session?.user;

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
            {/* Glass Card */}
            <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6">

                {/* Profile Section */}
                <div className="flex flex-col items-center text-center">
                    <div className="relative">
                        <img
                            src={user?.image || "/avatar.png"}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-white/30 shadow-lg object-cover"
                        />
                        <div className="absolute -bottom-2 right-0 w-5 h-5 rounded-full bg-green-400 border-2 border-white" />
                    </div>

                    <h1 className="mt-4 text-xl font-semibold text-white">
                        {user?.name || "Guest User"}
                    </h1>

                    <p className="text-sm text-white/70">
                        {user?.email || "No email linked"}
                    </p>

                    <div className="mt-2 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70">
                        {status === "authenticated" ? "Logged In" : "Not Logged In"}
                    </div>
                </div>

                {/* Credentials Card (Neumorphic) */}
                <div className="mt-6 rounded-2xl p-4 bg-slate-900/40 shadow-inner border border-white/10">
                    <p className="text-white/60 text-xs mb-2">SESSION CREDENTIALS</p>

                    <div className="space-y-2 text-sm text-white">
                        <div className="flex justify-between">
                            <span className="text-white/60">Name</span>
                            <span>{user?.name || "-"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/60">Email</span>
                            <span className="truncate max-w-45">{user?.email || "-"}</span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 space-y-3">
                    {status === "authenticated" ? (
                        <button
                            onClick={() => {
                                signOut({ redirect: true, callbackUrl: "/" });
                            }}
                            className="w-full py-3 rounded-2xl bg-red-500/90 hover:bg-red-500 text-white font-medium shadow-lg active:scale-[0.98] transition"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button
                            onClick={() => signIn()}
                            className="w-full py-3 rounded-2xl bg-blue-500/90 hover:bg-blue-500 text-white font-medium shadow-lg active:scale-[0.98] transition"
                        >
                            Sign In
                        </button>
                    )}

                    <button
                        onClick={() => router.push("/")}
                        className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md shadow-inner active:scale-[0.98] transition"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
}
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: sessionData } = useSession();

    return (
        <nav className="h-16 flex items-center justify-between px-6 bg-gradient-to-r from-blue-600  via-indigo-400  to-blue-600 ">
            <div>
                <span className="text-white font-sm font-semibold">Notebook</span>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2">
                    {sessionData && <>
                        <img src={sessionData?.user?.image ?? ""} width={40} height={40} alt="Profile pic" className="rounded-full" />
                        <span className="text-white font-sm font-semibold">{sessionData?.user?.name}</span></>}
                </div>
                <button
                    className="rounded-md bg-white/10 px-3 py-1.5 font-semibold text-white no-underline transition hover:bg-white/20"
                    onClick={sessionData ? () => void signOut() : () => void signIn()}
                >
                    {sessionData ? "Sign out" : "Sign in"}
                </button>
            </div>
        </nav>

    )
}
export default Navbar
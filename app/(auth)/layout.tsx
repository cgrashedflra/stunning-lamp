import SocialLogInForm from "@/components/forms/SocialLogInForm"
import { ReactNode } from "react"
import Image from "next/image"

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
            <section className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between gap-2 mt-4 text-xl font-semibold text-white">
                    <div className="">
                        <h1 className="text-bold">Join Stunning Lamp</h1>
                        <p className="paragraph-regular ">To test my authentication setup</p>
                    </div>
                    <Image src="favicon.svg" alt="DevFlow Logo" width={50} height={50} className="object-contain" />
                </div>
                {children}
                <SocialLogInForm />
            </section>
        </main >

    )
}

export default AuthLayout
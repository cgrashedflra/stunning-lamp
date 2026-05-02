import SocialLogInForm from "@/components/forms/SocialLogInForm"
import { Children, ReactNode } from "react"

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10">
            <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-130 sm:px-8">
                <div className="flex items-center justify-between gap-2">
                    {children}
                    <SocialLogInForm />
                </div>
            </section>
        </main>

    )
}

export default AuthLayout
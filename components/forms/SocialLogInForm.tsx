"use client";

import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react';

const SocialLogInForm = () => {
    const buttonClass =
        "w-full mt-4 p-6 rounded-2xl bg-lime/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md shadow-inner active:scale-[0.98] transition";

    return (
        <div className='flex justify-center shadow-xl '>
            <Button className={buttonClass} onClick={() => signIn("google")}>
                <Image src="/google.svg" alt="Google Logo" width={30} height={30} className="mr-2.5 object-contain" />
                <span>Log in with Google</span>
            </Button>
        </div>
    )
}

export default SocialLogInForm
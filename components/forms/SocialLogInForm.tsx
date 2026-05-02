"use client";

import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react';

const SocialLogInForm = () => {
    const buttonClass =
        "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

    return (
        <div>
            <Button className={buttonClass} onClick={() => signIn("google")}>
                <Image src="/google.svg" alt="Google Logo" width={20} height={20} className="mr-2.5 object-contain" />
                <span>Log in with Google</span>
            </Button>
        </div>
    )
}

export default SocialLogInForm
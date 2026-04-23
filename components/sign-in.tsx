
"use client"

import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return <button onClick={() => signIn("google")} className="btn-google">signIn with <span>google</span></button>
}

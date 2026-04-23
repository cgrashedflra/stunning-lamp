
"use client"

import { signOut } from "next-auth/react"
 
export default function SignOut() {
  return <button onClick={() => signOut()} className="btn-google">sign-Out</button>
}

import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { auth } from "@/auth";
import { cn } from "@/lib/utils";

const medievalSharp = localFont({
  src: "./fonts/MedievalSharp-Regular-VF.ttf",
  variable: "--font-medieval-sharp",
})

export const metadata: Metadata = {
  title: "Stunning Lamp",
  description: "Stunning lAmp a nextjs Auth setup project practice",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  return (
    < html
      lang="en"
      className={cn("antialiased", medievalSharp.variable)
      }
    >
      <SessionProvider session={session}>
        <body className="min-h-full flex flex-col">
          {children}
        </body>
      </SessionProvider>
    </html >
  );
}

export default RootLayout
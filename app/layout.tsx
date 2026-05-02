import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { auth } from "@/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`
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
'use client'
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    // defaultTheme="system"  enableSystem themes={['light', 'dark']}
    return <ThemeProvider attribute="class" defaultTheme="dark" >
        <SessionProvider>
            <NextUIProvider>
                <main className="dark:purple-dark light:purple-light">
                    {children}
                </main>
            </NextUIProvider>
        </SessionProvider>
    </ThemeProvider>
}
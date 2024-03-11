'use client'
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    // defaultTheme="system"  enableSystem themes={['light', 'dark']}
    return <ThemeProvider attribute="class" defaultTheme="purple-dark" >
        <SessionProvider>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </SessionProvider>
    </ThemeProvider>
}
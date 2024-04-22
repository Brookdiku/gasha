"use client"
import { useTheme } from "next-themes";
import { useState } from "react";
import Particles from "./components/particles";

export default function Home({ children }: { children: React.ReactNode; }) {
    const { theme, setTheme } = useTheme();
    return (
        <div className="relative  dark:bg-background min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <Particles />
            <button
                className="absolute top-4 right-4 bg-transparent z-10"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === "light" ? <i className="ri-moon-line text-xl"></i> : <i className="ri-sun-line text-xl"></i>}
            </button>
            <div className="z-10 flex flex-col items-center justify-center text-center relative">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold xl:text-5xl">Welcome to Security.</p>
                <a
                    href="/dashboard"
                    className="mt-6 bg-gradient-to-r text-white from-purple-500 to-purple-900  py-3 px-10 rounded-lg transition duration-300 ease-in-out inline-block">
                    Get Started
                </a>
            </div>
        </div>
    );
}

"use client"
import React, { useState } from "react";
import SideBar from "@/app/components/sidebar";
import TopNavbar from "@/app/components/topnavbar";
import Particles from "../components/particles";

export default function Layout({ children }: { children: React.ReactNode; }) {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(true);
    const handleToggle = () => {
        isMenuToggled ? setIsMenuToggled(false) : setIsMenuToggled(true);
    };
    return (
        <>
            <main className={"dark:purple-dark light:purple-light dark:bg-background h-screen flex"}>
                <Particles />
                <div
                    className={` ${isMenuToggled ? "w-16" : "w-64" 
                        } h-full md:relative md:block transition-all duration-300  ease-in-out ${!isMenuToggled ? "z-50 absolute left-0 md:static" : "hidden"
                        }`}
                >
                    <SideBar isMenuToggled={isMenuToggled} handleToggle={handleToggle} />
                </div>
                <div className={"  flex flex-grow flex-col w-full"}>
                    <TopNavbar handleToggle={handleToggle} />
                    <main className=" p-5 flex-grow overflow-auto">{children}</main>
                </div>
            </main>
        </>
    )

}
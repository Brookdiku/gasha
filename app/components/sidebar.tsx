"use client"
import React from "react";
import { Button, Link, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import shield from "../../public/shield.png"

export default function SideBar({ isMenuToggled, handleToggle }: { isMenuToggled: boolean; handleToggle: () => void }) {
    const menuItems = [
        { href: "/dashboard", icon: "ri-dashboard-line", label: "Dashboard" },
        { href: "/dashboard/modules", icon: "ri-folder-line", label: "Modules" },
        { href: "/dashboard/pages", icon: "ri-pages-line", label: "Pages" },
        { href: "/dashboard/actions", icon: "ri-cursor-line", label: "Actions" },
        { href: "/dashboard/users", icon: "ri-user-line", label: "Users" }
    ];
    return (
        <>
            <div className={`w-full backdrop-blur-sm p-4 flex flex-col dark:bg-black  dark:bg-opacity-20 h-full ${isMenuToggled ? "items-center" : "items-start"}`}>
                <div className="flex items-center justify-between w-full">
                    <Link href="/">
                        <div className="flex justify-center items-center">
                            <Image src={shield} alt="Logo" width={50} height={50} />
                            {!isMenuToggled && <span className="text-lg  font-bold ml-3">GASHA</span>}
                        </div>
                    </Link>
                    <Button isIconOnly className="bg-transparent md:hidden" onClick={() => handleToggle()}>
                        <i className="ri-menu-fold-fill text-xl"></i>
                    </Button>
                </div>
                <div className="flex flex-col gap-2 mt-5 w-full items-center">
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            isIconOnly={isMenuToggled}
                            variant="flat"
                            className={`${!isMenuToggled ? "w-full justify-start" : "justify-center"} flex items-center rounded-md bg-transparent`}
                        >
                            <a href={item.href} className="text-left">
                                <i className={`dark:text-white ${item.icon} text-xl`}></i>
                                {!isMenuToggled && <span className="text-sm dark:text-white ml-3">{item.label}</span>}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </>

    );
}

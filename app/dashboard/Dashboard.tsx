"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Dashboard() {
    return (
        <main className="flex-grow">
            <div className="rounded px-5 py-5 scroll-auto">
                <div className="flex flex-col md:flex-row py-5 gap-2 justify-evenly">
                    <div className="flex flex-col justify-center bg-white dark:bg-black dark:backdrop-blur-lg dark:bg-opacity-20 p-4 rounded-xl h-24 md:w-1/4">
                        <div className="flex items-baseline">
                            <i className="ri-user-line text-4xl p-1 mr-2 text-blue-500"></i>
                            <h2 className="text-xl dark:dark:text-white">Users</h2>
                        </div>
                        <h2 className="text-2xl font-bold  dark:text-white">1234,566</h2>
                    </div>
                    <div className="flex flex-col justify-center bg-white dark:bg-black dark:backdrop-blur-lg dark:bg-opacity-15 p-4 rounded-xl h-24 md:w-1/4">
                        <div className="flex items-baseline">
                            <i className="ri-customer-service-line text-4xl p-1 mr-2 text-green-500"></i>
                            <h2 className="text-xl  dark:text-white">Services</h2>
                        </div>
                        <h2 className="text-2xl font-bold  dark:text-white">1234</h2>
                    </div>
                    <div className="flex flex-col justify-centerbg-white dark:bg-black dark:backdrop-blur-lg dark:bg-opacity-20 p-4 rounded-xl h-24 md:w-1/4">
                        <div className="flex items-baseline">
                            <i className="ri-git-pull-request-line text-4xl p-1 mr-2 text-purple-500"></i>
                            <h2 className="text-xl  dark:text-white">API Requests</h2>
                        </div>
                        <h2 className="text-2xl font-bold  dark:text-white">2234,566</h2>
                    </div>
                    <div className="flex flex-col justify-center bg-white dark:bg-black dark:backdrop-blur-lg dark:bg-opacity-20 p-4 rounded-xl h-24 md:w-1/4">
                        <div className="flex items-baseline">
                            <i className="ri-verified-badge-line text-4xl rounded p-1 mr-2 text-yellow-500"></i>
                            <h2 className="text-xl  dark:text-white">Verified</h2>
                        </div>
                        <h2 className="text-2xl font-bold  dark:text-white">2633</h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="dark:backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-20 rounded h-60 md:w-1/2"></div>
                    <div className="dark:backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-20 rounded h-60 md:w-1/2"></div>
                </div>
            </div>
        </main>

    );
}


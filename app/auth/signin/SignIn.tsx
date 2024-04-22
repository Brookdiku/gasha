"use client"
import Particles from '@/app/components/particles'
import { Input } from '@nextui-org/react';
import Link from 'next/link'
import React, { useState } from 'react'
import { handleInputChange, handleLogin } from './handleFunctions/signIn';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
const SignIn = () => {
    const [credentials, setCredentials] = useState<Credentials>({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState<CredentialsError>({
        username: '',
        password: ''
    });
    
    return (
        <>
        <Toaster/>
        <div className='relative dark:bg-background'>
            <Particles />
            <div className='min-h-screen flex items-center justify-center'>
                <div className=" p-8 max-w-md w-full space-y-4 ">
                    <h2 className="text-2xl font-bold text-center dark:text-white">SignIn</h2>
                    <form onSubmit={(e) => handleLogin(e,setErrors,credentials)} className="space-y-4 w-full flex flex-col justify-center">
                        <Input
                            type="username"
                            label="Username"
                            variant="bordered"
                            value={credentials.username}
                            onChange={(e) => handleInputChange(e, 'username',setCredentials)}
                            errorMessage={errors.username}
                        />
                        <Input
                            type="password"
                            label="Password"
                            variant="bordered"
                            value={credentials.password}
                            onChange={(e) => handleInputChange(e, 'password',setCredentials)}
                            errorMessage={errors.password}
                        />
                        <button className="mt-6 bg-gradient-to-r text-white from-purple-500 to-purple-900  py-3 px-10 rounded-lg transition duration-300 ease-in-out inline-block">Sign In</button>
                        <Link href={"/"} className='mt-6 bg-gradient-to-r text-white  py-3 px-10 rounded-lg transition duration-300 ease-in-out inline-block text-center'>Go Home</Link>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignIn
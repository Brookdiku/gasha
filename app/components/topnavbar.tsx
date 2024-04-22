"use client"
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { redirect } from "next/navigation";
import React from 'react'
// @ts-ignore
const TopNavbar = ({ handleToggle }) => {
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession();
  const handleSignOut=()=>{
    signOut();
    redirect('/')
  }
  return (
    <div className="dark:bg-black dark:backdrop-blur-lg dark:bg-opacity-20 rounded py-2 px-6 mt-4 mx-5 flex items-center justify-between shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <div className="flex items-center">
        <Button isIconOnly className="bg-transparent" onClick={handleToggle}>
          <i className="dark:text-white ri-menu-fold-fill text-xl"></i>
        </Button>
        <Button isIconOnly className="bg-transparent" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === "light" ? <i className="dark:text-white ri-moon-line text-xl"></i> : <i className="dark:text-white ri-sun-line text-xl"></i>}
        </Button>
      </div>
      {session?
      <div className="flex items-center gap-4">
        <Dropdown className="backdrop-blur-lg mt-2">
          <DropdownTrigger>
            <Button color='primary' >
             {session.user?.user_name}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="copy"><i className='ri-user-fill'></i> Profile</DropdownItem>
            <DropdownItem key="edit"><i className='ri-message-fill'></i> Messages</DropdownItem>
            <DropdownItem color="primary" onClick={() =>handleSignOut()} key="new"><i className='ri-door-fill'></i> SignOut</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>:<></>}
    </div>
  )
}

export default TopNavbar
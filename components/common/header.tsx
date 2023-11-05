'use client'

import React, { useEffect, useState } from 'react'
import { ModeToggle } from '../toggle/mode-toggle'
import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dayjs from 'dayjs'

const navLinks = [
  { path: '/', title: 'Index' },
  { path: '/about', title: 'About' },
  { path: '/work', title: 'Works' },
  { path: '/article', title: 'Articles' },
  { path: '/record', title: 'Records' },
] as { path: string; title: string }[]

const Header = () => {
  const pathname = usePathname() || ''
  const [date, setDate] = useState<string>('')
  useEffect(() => {
    setDate(dayjs().format('YYYY MMM DD'))
  }, [])

  return (
    <header className="box-border fixed top-0 z-40 flex items-start w-full h-20 max-sm:h-16 font-sans border-b backdrop-blur">
      <a
        className="flex px-6 pt-6 max-sm:px-4 max-sm:pt-4 space-x-2 md:pt-8 items-start md:px-10"
        href="/"
      >
        <span className="text-[10px] font-bold">Hyewon Kwak</span>
        <span className="text-[10px]">creative developer</span>
      </a>
      <div className="absolute flex justify-center w-full text-[10px] top-6 max-sm:hidden">
        {date}
      </div>
      <nav className="absolute flex justify-center w-full gap-4 text-sm sm:text-base top-12 max-sm:top-10">
        {navLinks.map((link, index) => (
          <Link
            key={link.path}
            className={`transition duration-200 hover: ${
              pathname !== link.path ? 'blur-[1px]' : 'blur-none'
            } font-bold hover:blur-none hover:scale-110`}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header

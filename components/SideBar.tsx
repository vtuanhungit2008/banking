'use client'
import  Link  from 'next/link'
import React from 'react'
import  Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { it } from 'node:test';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const SideBar = ({user}:SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
        <Link href={"/"} className='mb-12 cursor-pointer items-center gap-2'>
        <Image 
        src="/icons/logo.svg"
        height={34}
        width={34}
        alt='aaa'
        className='size-[24px] max-xl:size-14'
          />
        <h1 className="sidebar-logo">
        Horizon
     </h1>
        </Link>
          {sidebarLinks.map((item)=>{
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
            return(
                <Link className={cn('sidebar-link',{"bg-bank-gradient":isActive})} href={item.route} key={item.label}>
                    {item.label}
                </Link>
            )
          })} 
        </nav>
    </section>
  )
}

export default SideBar

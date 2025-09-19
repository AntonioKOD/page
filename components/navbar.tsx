'use client'
import {Navbar, NavBody, NavItems, MobileNav, NavbarLogo, MobileNavHeader, MobileNavToggle, MobileNavMenu} from '@/components/ui/resizable-navbar'
import Link from 'next/link'


import {useState} from 'react'

export default function NavBar(){
    const navItems = [
        {
            name: "Shop",
            link: "/shop"
        },
    ]
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className='relative w-full'>
            <Navbar>
                <NavBody>
                    <NavbarLogo/>
                    <NavItems items={navItems}/>
                </NavBody>
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo/>
                        <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>

                    </MobileNavHeader>
                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <Link key={idx} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className='relative text-neutral-600 dark:text-neutral-300'>
                                <span className='block'>{item.name}</span>
                            </Link>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>    
    )
}
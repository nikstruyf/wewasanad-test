"use client";

import { useState, useEffect } from 'react';
import { usePathname  } from 'next/navigation'
import Link from 'next/link'

export default function TopNav() {
    const pathname = usePathname ()

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isDrop, setIsDrop] = useState(false)

    useEffect(() => {
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
      console.log(window.innerWidth)
    }, [windowWidth])

    return (
        <div className="topnav">
          <div className="topnav-top">
            <div>
              LOGO
            </div>
            <div className={`topnav-menu ${windowWidth > 500 ? '' : 'drop'} ${(isDrop && windowWidth <= 500) || windowWidth > 500 ? '' : 'hidden'}`}>
              <Link className="home" href='/'>Home</Link>
              <div>menu01</div>
              <div>menu02</div>
              <div>menu03</div>
              <div>menu04</div>
            </div>
            <div className={`topnav-menu ${windowWidth <= 500 ? '' : 'hidden'}`}>
              <button onClick={() => {setIsDrop(!isDrop)}}>dropdown menu</button>
            </div>
          </div>
          <div className="topnav-path">
            <div className="pathname">
              <Link href='/'>Home / </Link>
              {pathname.split('/')}
            </div>
          </div>
        </div>
    )
}
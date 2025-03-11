"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname()
  console.log(pathname.includes('dashboard'))
  if(!pathname.includes('dashboard')){
    
  return (
    <div>
      <nav   className="flex items-center justify-center gap-5 ">
        <ul>
          <Link href={'/'}>Home</Link>
        </ul>
        <ul>
          <Link href={'/About'}>About</Link>
        </ul>
        <ul>
          <Link href={'/Contact'}>Contact</Link>
        </ul>
      </nav>
    </div>
  );
  }
  else{
    <></>
  }

}

export default Navbar;

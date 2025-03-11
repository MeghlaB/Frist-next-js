import Link from "next/link";
import React from "react";

function Navbar() {
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

export default Navbar;

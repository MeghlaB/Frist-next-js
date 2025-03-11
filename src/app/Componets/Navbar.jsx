import React from "react";

function Navbar() {
  return (
    <div>
      <nav   className="flex items-center justify-center gap-5 ">
        <ul>
          <li>Home</li>
        </ul>
        <ul>
          <li>About</li>
        </ul>
        <ul>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

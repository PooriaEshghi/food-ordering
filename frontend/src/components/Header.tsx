import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-b-2 border-b-orang-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl front-bold tracking-tight text-orange-500"
        >
          MernEats.com
        </Link>
      </div>
    </div>
  );
}

export default Header;

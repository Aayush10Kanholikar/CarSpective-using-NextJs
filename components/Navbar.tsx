import React from "react";
import Link from "next/link";
import Image from "next/image";

import { CustomButtom } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center ">
          <Image
            src={"/carlogo.jpg"}
            alt="CarSpective Logo"
            width={70}
            height={18}
            className="object-contain"
          />
          <span className="font-bold text-2xl text-red-500">CarSpective</span>
        </Link>
        <CustomButtom
          btnType="button"
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;

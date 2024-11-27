import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-gray-100  mt-5 border-t">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
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
          <p className="text-base text-gray-700">
            CarSpective 2024 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justif items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        @2024 CarSpective. All Rights Reseved
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { header } from "../data/setting";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState("home");
  const router = useRouter();
  const handleMobile = () => {
    setMobile(!mobile);
  };
  useEffect(() => {
    router.asPath == "/" ? setActive("/#home") : setActive(router.asPath);
  }, [router]);
  const handleLinkClick = (item) => {
    setMobile(false);
  };
  return (
    <header className="w-full fixed z-50 text-txt bg-container">
      <nav className="flex flex-wrap justify-between items-center relative h-14 md:h-20 max-w-5xl mx-auto">
        <h1 className="hover:text-first text-xl font-medium pl-2">
          <Link href={"/"}>
            <a onClick={handleLinkClick}>{header.logo}</a>
          </Link>
        </h1>
        <span
          className="cursor-pointer pr-2 text-black md:hidden"
          onClick={handleMobile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
        <ul
          className={`fixed w-full top-14 text-center shadow-md h-0 overflow-hidden transition-all duration-200 ease-in-out md:relative md:h-auto md:flex md:top-0 md:w-max md:shadow-none md:space-x-4 md:pr-4 xl:pr-0 ${
            mobile ? "h-auto py-2 bg-container " : ""
          }`}
        >
          {header.menu.map((item, i) => {
            return (
              <li key={i} className="nav-items py-2">
                <Link href={item.path}>
                  <a
                    className={`nav-links capitalize hover:text-first font-medium ${
                      active == item.path ? "text-first" : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

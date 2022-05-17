import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { address, contact, information, service } from "../data/setting";
const Footer = () => {
  return (
    <footer className="pt-28 pb-4 text-txt">
      <div className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
        <div className="px-4">
          <h2 className="text-first text-3xl font-bold mb-2">Tasty Food</h2>
          <span className="text-txt text-xl mb-4 block">Restaurant</span>
          <div className="flex items-center space-x-2 text-txt">
            <FaFacebookF size={25} />
            <FaInstagram size={28} />
            <FaYoutube size={29} />
          </div>
        </div>
        <div className="px-4 flex flex-col space-y-3">
          <h2 className="text-xl text-zinc-900 font-bold">Services</h2>
          {service.map((item, i) => (
            <Link href="/" key={i}>
              <a className="text-lg">{item}</a>
            </Link>
          ))}
        </div>
        <div className="px-4 flex flex-col space-y-3 ">
          <h2 className="text-xl text-zinc-900 font-bold">Information</h2>
          {information.map((item, i) => (
            <Link href="/" key={i}>
              <a className="text-lg">{item}</a>
            </Link>
          ))}
        </div>
        <div className="px-4 flex flex-col space-y-3 ">
          <h2 className=" text-xl text-zinc-900 font-bold">Address</h2>
          <p className="text-lg">
            {address.postal} <br />
            {address.street}
            <br />
            {address.city}, {address.state}, {address.country}
            <br />
            {contact.phone}
            <br />
            {contact.email}
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-6 md:mt-10 text-center">
        © 2022{" "}
        <Link href={"https://shresthapradhuman.com.np"}>
          <a className=" text-first hover:text-firstAlt">Shrestha</a>
        </Link>
        . All right reserved
      </div>
    </footer>
  );
};

export default Footer;

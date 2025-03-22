import Logo from "@/app/assests/logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const services = [
    { id: 0, title: "Islamic School", url: "/about" },
    { id: 1, title: "Our Courses", url: "/about" },
    { id: 2, title: "Our Mission", url: "/about" },
    { id: 3, title: "Contact Us", url: "/contact" },
    { id: 4, title: "Our Event", url: "/events" },
  ];
  const links = [
    { id: 0, title: "About Us", url: "/about" },
    { id: 1, title: "Services", url: "/services" },
    { id: 2, title: "Semester", url: "/events" },
    { id: 3, title: "Prayer Times", url: "/prayer" },
  ];
  return (
    <footer className="container mx-auto px-3 lg:px-0">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <Image src={Logo} alt="Ummah" width={200} height={200} />
          <p className="text-gray-500 mt-3 font">
            Build and Earn with your online store with lots of cool and
            exclusive wpo-features
          </p>
          <div className="flex gap-x-5 my-5">
            <Link href="https://www.facebook.com/">
              <FaFacebookF color="#3AD7D7" className="text-2xl" />
            </Link>
            <Link href="https://x.com/">
              <FaTwitter color="#3AD7D7" className="text-2xl" />
            </Link>
            <Link href="https://www.instagram.com/">
              <FaInstagram color="#3AD7D7" className="text-2xl" />
            </Link>
            <Link href="https://www.google.com/">
              <TiSocialGooglePlus color="#3AD7D7" className="text-2xl" />
            </Link>
          </div>
        </div>
        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font text-xl font-semibold text-gray-800">Services</h3>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link className="text-gray-500 font" href={service.url}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 3: Customer Service */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 font">
            Useful Links
          </h3>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link className="text-gray-500 font" href={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 4: Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 font capitalize">
            contact
          </h3>
          <p className="text-gray-500 mt-3 font">
            online store with lots of cool and exclusive wpo-features
          </p>
          <div className="mt-4 flex">
            <ul>
              <li className="flex items-center gap-4 my-2 font text-gray-500">
                <span>
                  <IoLocationOutline />
                </span>
                <span>Kamarpurkur, Saidpur , Nilfamari</span>
              </li>
              <li className="flex items-center gap-4 my-2 font text-gray-500">
                <span>
                  <FiPhone />
                </span>
                <span>+880 1719-68 1150</span>
              </li>
              <li className="flex items-center gap-4 my-2 font text-gray-500">
                <span>
                  <MdOutlineEmail />
                </span>
                <span>ummah@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 py-4 text-center text-gray-800 font">
        © {currentYear} Ummah. All rights reserved
      </div>
    </footer>
  );
}

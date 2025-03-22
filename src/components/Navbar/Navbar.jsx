import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assests/logo.png";
import ActiveLink from "../shared/ActiveLinks";
import Button from "../shared/Button";

export default function Navbar() {
  const navLinks = [
    { id: 0, title: "Home", href: "/" },
    { id: 1, title: "About", href: "/about" },
    { id: 2, title: "Service", href: "/service" },
    { id: 3, title: "Donate", href: "/donate" },
    { id: 4, title: "event", href: "/event" },
    { id: 5, title: "blog", href: "/blog" },
  ];
  return (
    <div className="container mx-auto flex justify-between items-center mt-2">
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <Image height={150} width={150} src={Logo} alt="ummah logo" />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="hidden lg:block">
        <ul className="flex gap-x-5">
          {navLinks.map((link) => (
            <li className="" key={link.id}>
              <ActiveLink path={link.href}>{link.title}</ActiveLink>
            </li>
          ))}
        </ul>
      </div>
      {/* contact button */}
      <div>
        <Button path={"/contact"}>contact now</Button>
      </div>
    </div>
  );
}

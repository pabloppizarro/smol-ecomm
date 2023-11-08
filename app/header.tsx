"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
const links = [
  { name: "Brands", href: "/brands" },
  { name: "Exclusives", href: "/exclusives" },
  { name: "Offers", href: "/offers" },
  { name: "Favorites", href: "/favorites" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className=" font-poppinsBold text-lg  justify-center p-4 border bg-transparent w-full">
      <div className="md:w-8/12 flex items-center justify-around top gap-4 m-auto">
        <Link className=" hover:font-bold text-xl" href={"/"}>
          TechStore
        </Link>
        <input
          className="w-full rounded-md px-4 text-black border"
          type="text"
          placeholder="search for prods..."
        />
        <div className="flex divide-x">
          <Button>
            hey
            <ShoppingBag />
          </Button>
        </div>
      </div>
      <nav>
        <ul className="flex m-2 gap-8 justify-center">
          {links.map((l) => (
            <li>
              <Link
                key={l.name}
                className=" hover:font-bold text-lg"
                href={l.href}
                style={pathname === l.href ? { fontWeight: "bold" } : {}}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

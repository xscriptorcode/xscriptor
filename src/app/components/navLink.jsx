"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
    const pathname = usePathname();

    // Si es la página de inicio, solo marcar activo cuando el pathname sea exactamente "/"
    const isActive = link.url === "/" ? pathname === "/" : pathname.startsWith(link.url);

    return (
        <Link 
            href={link.url} 
            className={`p-1 border-b-2 ${isActive ? "border-yellow-500 text-white" : "border-transparent"}`}>
            {link.title}
        </Link>
    );
};

export default NavLink;

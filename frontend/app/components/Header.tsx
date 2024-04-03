import { useState } from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import MenuDropdown from "./MenuDropdown";
import Image from "next/image";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="w-full flex justify-between items-center fixed h-[100px] bg-accent/50 shadow-md px-10">
            <div>
                <Image
                    alt="logo"
                    className="h-20 w-20 object-cover"
                    height="100"
                    src="/logo.png"
                    style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                    }}
                    width="100"
                />
            </div>
            <MenuDropdown handleToggleMenu={handleToggleMenu} />

            <NavigationMenu className={`lg:flex hidden`}>
                <NavigationMenuList className="flex space-x-4">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                HOME
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                ABOUT US
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/competition" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                COMPETITION & WORKSHOP
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                GALLERY
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

export default Header
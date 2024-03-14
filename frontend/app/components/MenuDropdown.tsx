import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

interface IDropdownMenu {
    handleToggleMenu: () => void
}

const MenuDropdown = ({ handleToggleMenu }: IDropdownMenu) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="block lg:hidden" onClick={handleToggleMenu} variant="outline">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            HOME
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            ABOUT
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            COMPETITION & WORKSHOP
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            GALLERY
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MenuDropdown
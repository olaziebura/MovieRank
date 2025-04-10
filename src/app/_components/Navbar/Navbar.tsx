import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../shadcn/dropdown-menu";
import { UserRound } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/shadcn/navigation-menu";
import { Button } from "@/shadcn/button";

const menuItems = [
  { label: "Strona główna", href: "/" },
  { label: "filmy", href: "/filmy" },
];

export const NavBar = () => {
  return (
    <NavigationMenu className="p-4 bg-accent-500 max-w-full justify-end">
      <NavigationMenuList className="flex items-center gap-4">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} passHref>
              <NavigationMenuLink asChild color="bg-neutral-800">
                <Button
                  variant="link"
                  className="text-neutral-800 bg-transparent shadow-none uppercase hover:bg-transparent cursor-pointer"
                >
                  {item.label}
                </Button>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <Separator className="w-px h-10 bg-neutral-800" />
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-neutral-800 px-4 cursor-pointer flex items-center ">
              <UserRound className="w-full h-full text-neutral-800 stroke-[2]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Log out</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

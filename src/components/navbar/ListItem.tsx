// components/CustomNavbar.js
import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import SquareeIcon from "../ui/icons/SquareeIcon";
import MenuItem from "./MenuItem";
import { features, resources, company } from "@/lib/data-navbar";

export function CustomNavbar() {
  return (
    <div className="w-full border border-[#D8D8D8] rounded-3xl p-4 mr-24 ml-24">
      <NavigationMenu className="ml-3 lg:gap-x-32 flex items-center justify-between">
        <div className="flex lg:space-x-20 items-center">
          <SquareeIcon />
          <NavigationMenuList className="flex space-x-4">
            <MenuItem title="Features" items={features} />
            <MenuItem title="Resources" items={resources} />
            <MenuItem title="Company" items={company} />
            <NavigationMenuItem>
              <Link href="/contact-sales" legacyBehavior passHref>
                <NavigationMenuLink className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group w-max">
                  Contact Sales
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="lg:ml-60 flex items-center">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </NavigationMenu>
    </div>
  );
}

export default CustomNavbar;

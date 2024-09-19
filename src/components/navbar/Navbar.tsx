"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SquareeIcon from "../ui/icons/SquareeIcon";

const features: { title: string; href: string; description: string }[] = [
  {
    title: "Feature 1",
    href: "/features/1",
    description: "Description of feature 1.",
  },
  {
    title: "Feature 2",
    href: "/features/2",
    description: "Description of feature 2.",
  },
  {
    title: "Feature 3",
    href: "/features/3",
    description: "Description of feature 3.",
  },
];

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Resource 1",
    href: "/resources/1",
    description: "Description of resource 1.",
  },
  {
    title: "Resource 2",
    href: "/resources/2",
    description: "Description of resource 2.",
  },
  {
    title: "Resource 3",
    href: "/resources/3",
    description: "Description of resource 3.",
  },
];

const company: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about our company.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our team.",
  },
  {
    title: "Press",
    href: "/press",
    description: "Latest news and press releases.",
  },
];

export function CustomNavbar() {
  return (
    <div className="w-full border border-[#D8D8D8] rounded-3xl p-4 mr-24 ml-24">
      <NavigationMenu className="ml-3 lg:gap-x-32 flex items-center justify-between">
        <div className="flex lg:space-x-20 items-center">
          <SquareeIcon />
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {features.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resources.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {company.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default CustomNavbar;

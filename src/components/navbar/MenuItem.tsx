import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";

interface MenuItemProps {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ title, items }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
        {items.map((item) => (
          <ListItem
            key={item.title}
            title={item.title}
            href={item.href}
          ></ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

export default MenuItem;

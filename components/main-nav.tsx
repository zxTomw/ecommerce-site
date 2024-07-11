import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const components: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products/" },
  { title: "About", href: "/about/" },
];

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {components.map((component) => (
          <NavigationMenuItem key={component.title}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href={component.href}>{component.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

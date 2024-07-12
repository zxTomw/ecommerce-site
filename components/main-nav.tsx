"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const components: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "About", href: "/about" },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const path = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {components.map((component) => (
        <Link
          key={component.title}
          href={component.href}
          className={clsx(
            "text-sm font-medium transition-colors hover:text-primary",
            path !== component.href && "text-muted-foreground "
          )}
        >
          {component.title}
        </Link>
      ))}
    </nav>
  );
}

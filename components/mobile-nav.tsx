"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon, ComponentNoneIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger className="sm:hidden">
        <HamburgerMenuIcon className="w-4 h-4 " />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <ComponentNoneIcon className="w-6 h-6" />
          </SheetTitle>
          <SheetDescription>Menu</SheetDescription>
        </SheetHeader>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

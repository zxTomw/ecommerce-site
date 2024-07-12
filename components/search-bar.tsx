"use client";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ReactHTMLElement, useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Button, ButtonProps } from "@/components/ui/button";
import { MagnifyingGlassIcon, HomeIcon } from "@radix-ui/react-icons";

export function SearchBar({ className, ...props }: ButtonProps) {
  const [dialogueOpen, setDialogueOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setDialogueOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <>
      <Button
        variant="outline"
        onClick={() => setDialogueOpen(true)}
        className={cn(
          "bg-slate-300 text-slate-500 bg-opacity-15 hidden  lg:flex justify-start items-center gap-1",
          className
        )}
      >
        <MagnifyingGlassIcon />
        Type
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          /
        </kbd>{" "}
        to search
      </Button>
      <MagnifyingGlassIcon
        onClick={() => setDialogueOpen(true)}
        className="h-4 w-4 lg:hidden"
      />

      <CommandDialog
        open={dialogueOpen}
        onOpenChange={(state) => setDialogueOpen(state)}
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

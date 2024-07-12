import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { SearchBar } from "@/components/search-bar";
import { ComponentNoneIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Noll | Quality Gadgets",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col ">
            <div className="sticky top-0 bg-opacity-60 dark:bg-opacity-60 dark:bg-slate-950 bg-white  backdrop-blur flex w-full h-16 items-center px-7 gap-5">
              <Link
                href="/"
                className="text-xl  mr-5 flex flex-row items-center gap-1"
              >
                <ComponentNoneIcon className="h-5 w-5 " />
              </Link>
              <MainNav className="" />
              <div className="flex-grow" />
              <SearchBar className="w-1/2 max-w-96" />
              <ModeToggle />
            </div>
            <main className="flex-grow p-5 max-w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

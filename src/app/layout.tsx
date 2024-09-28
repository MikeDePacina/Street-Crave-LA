import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* {children} */}
        <NavigationMenu>
          <NavigationMenuList>
            <Link href="/home"> <NavigationMenuItem >Home</NavigationMenuItem></Link>
           
            <Link href="/about"><NavigationMenuItem >About</NavigationMenuItem></Link>
          </NavigationMenuList>
        </NavigationMenu>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}

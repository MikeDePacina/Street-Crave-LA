"use client";


import {
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { Authenticated, Unauthenticated } from "convex/react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <ConvexClientProvider>
      <html>
        <body>
          <header>
            <Unauthenticated>
              <SignInButton />
            </Unauthenticated>
            <Authenticated>
              <UserButton />
            </Authenticated>
            <NavigationMenu>
              <Link href="/home">
                <NavigationMenuItem>Home</NavigationMenuItem>
              </Link>

              <Link href="/about">
                <NavigationMenuItem>About</NavigationMenuItem>
              </Link>
            </NavigationMenu>
          </header>
          {children}
        </body>
      </html>
    </ConvexClientProvider>
  );
}

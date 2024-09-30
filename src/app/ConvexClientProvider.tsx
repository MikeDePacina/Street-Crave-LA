"use client";

import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            {children}
        </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
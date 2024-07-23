"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Home() {

  const router = useRouter();

  return (
    <main>
      <ClerkProvider>
        <body>
          <h3 style={{ textAlign: "center", paddingTop: "5%" }}>Welcome to my page</h3>
          <br></br>
          <h1 style={{ textAlign: "center", paddingTop: "5%" }}> This is a simple project that works with next.js, clerk, middleware, and prisma to simulate an extremely simple posting &quot;blog&quot; site.</h1>
          <SignedOut>
            <div style={{ textAlign: "center", paddingTop: "5%" }}>
              <SignInButton>
                <div style={{ textAlign: "center", paddingTop: "5%" }}>
                  <Button>Sign In</Button>
                </div>
              </SignInButton>
            </div>
            <div style={{ textAlign: "center", paddingTop: "5%" }}>
              Or
              <div style={{ textAlign: "center", paddingTop: "5%" }}>
                <Button onClick={() => router.push('/api')}>Create Account</Button>
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </body>
      </ClerkProvider>
    </main>
  );
}

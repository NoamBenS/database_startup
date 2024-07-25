"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <h3 style={{ textAlign: "center", paddingTop: "5%" }}>Welcome to my page</h3>
      <br></br>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <h1 style={{ textAlign: "center", paddingTop: "5%", width: "50%" }}> This is a simple project that works with next.js, clerk, middleware, and prisma to simulate an extremely simple posting &quot;blog&quot; site.</h1>
      </div>
      <div style={{ textAlign: "center", paddingTop: "5%" }}>
        <Button asChild>
          <Link href="/posts">
            Go to your posts Page
          </Link>
        </Button>
      </div>
    </main>
  );
}

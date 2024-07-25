"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <main>
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

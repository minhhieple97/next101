import { LayoutProps } from "@/models/index";
import Link from "next/link";
import * as React from "react";

export function MainLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Main layout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{props.children}</div>
    </div>
  );
}

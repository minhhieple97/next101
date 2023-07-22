import { LayoutProps } from "@/models/index";
import Link from "next/link";
import * as React from "react";

export interface IAppProps {}

export function AdminLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Admin layout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{props.children}</div>
    </div>
  );
}

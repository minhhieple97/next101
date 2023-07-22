import { LayoutProps } from "@/models/index";
import Link from "next/link";
import * as React from "react";

export function EmptyLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Empty layout layout</h1>
      <div>{props.children}</div>
    </div>
  );
}

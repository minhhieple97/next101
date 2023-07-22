import { MainLayout } from "@/components/layout/main";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { NextPageWithLayout } from "../models";
const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});
const AboutPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>About page</h1>
      <Header></Header>
    </div>
  );
};
AboutPage.Layout = MainLayout;
export default AboutPage;

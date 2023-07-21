// import Header from "@/components/common/header";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});
const AboutPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>About page</h1>
      <Header></Header>
    </>
  );
};

export default AboutPage;

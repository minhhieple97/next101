import Link from "next/link";
import { useRouter } from "next/router";
import { MainLayout } from "@/components/layout/main";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 123,
        ref: "social",
      },
    });
  };
  return (
    <div>
      <Link href="/posts">Dashboard page</Link>
      <Link href="/about">About page</Link>
      <Link href="/todos">Todos page</Link>
      <Link href="/products">Product List Page</Link>
      <Link href="/products">Test CICID</Link>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};
Home.Layout = MainLayout;
export default Home;

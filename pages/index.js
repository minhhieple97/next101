import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
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
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

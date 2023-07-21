import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

export interface IParamCacheProps {
  data: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
}

export default function ParamCache(props: IParamCacheProps) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const intervalValue = setInterval(() => {
      setSeconds((oldState) => oldState + 1);
    }, 1000);
    return () => {
      clearInterval(intervalValue);
    };
  }, []);
  return (
    <>
      <h2>Seconds: {seconds}</h2>
      <p>{JSON.stringify(props.data)}</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");
  await new Promise((res) => setTimeout(res, 2000));
  const todoId = context.query.todoId;
  if (!todoId) return { props: { query: context.query } };
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await resp.json();
  return {
    props: {
      query: context.query,
      data,
    },
  };
};

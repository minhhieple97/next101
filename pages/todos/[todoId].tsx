import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface ITodoDetailPropsInterface {
  todos: ITodo;
}
const ToDoDetailPage = (props: ITodoDetailPropsInterface) => {
  const router = useRouter();
  if (router.isFallback)
    return (
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Loading...</div>
    );
  return (
    <div>
      <h1>Todo detail page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
      <p>Props: {JSON.stringify(props)}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("getStaticPaths");
  // const resp = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  // const data: ITodo[] = await resp.json();
  // const paths = data.map((todo) => ({
  //   params: {
  //     todoId: todo.id,
  //   },
  // }));
  return {
    paths: [
      {
        params: {
          todoId: "1",
        },
      },
      {
        params: {
          todoId: "2",
        },
      },
      {
        params: {
          todoId: "3",
        },
      },
      {
        params: {
          todoId: "4",
        },
      },
      {
        params: {
          todoId: "5",
        },
      },
      {
        params: {
          todoId: "6",
        },
      },
      {
        params: {
          todoId: "7",
        },
      },
    ],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  console.log("getStaticProps");
  const todoId = context.params?.todoId;
  if (!todoId) return { notFound: true };
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const data: ITodo = await resp.json();
  return {
    props: { todos: data },
    revalidate: 5,
  };
};

export default ToDoDetailPage;

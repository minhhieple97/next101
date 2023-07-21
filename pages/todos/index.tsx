import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface ITodoListPropsInterface {
  todos: ITodo[];
}
const PostListPage = (props: ITodoListPropsInterface) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <Link href={`/todos/${todo.id}`}>
            <span>{todo.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: ITodo[] = await resp.json();
  return {
    props: { todos: data },
  };
};

export default PostListPage;

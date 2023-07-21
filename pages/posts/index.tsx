import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
export interface IPostListPropsInterface {}
const PostListPage = (props: IPostListPropsInterface) => {
  return <div>PostListPage</div>;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("RUN getServerSideProps");
  await new Promise((res) => setTimeout(res, 3000));
  return {
    props: {},
  };
};
export default PostListPage;

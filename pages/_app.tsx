import { EmptyLayout } from "@/components/layout/empty";
import { AppPropsWithLayout } from "../models";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  // console.log({ Layout });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

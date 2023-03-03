import "@/styles/globals.css";

import { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Loading from "@/components/Loading/Loading";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const start = () => {
      setIsLoading(true);
    };

    const end = () => {
      setIsLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  switch (Component.displayName) {
    case "LoginPage":
      return (
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      );

    case "SignUpPage":
      return <Component {...pageProps} />;

    case "HomePage":
      return <Component {...pageProps} />;

    case "ErrorPage":
      return (
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      );

    default: {
      return isLoading ? (
        <SessionProvider session={session}>
          <Layout>
            <Loading />
          </Layout>
        </SessionProvider>
      ) : (
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      );
    }
  }
}

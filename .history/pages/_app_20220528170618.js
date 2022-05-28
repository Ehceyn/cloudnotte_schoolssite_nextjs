import { ApolloProvider } from "@apollo/client";
import { AnimatePresence } from "framer-motion";
import Layout from "../src/components/Layout";
import "../styles/globals.css";
import { useApollo } from "../lib/apolloClient";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ApolloProvider>
  );
}

export default MyApp;

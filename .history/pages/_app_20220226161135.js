import { ApolloProvider } from "@apollo/client";
import Layout from "../src/components/Layout";
import "../styles/globals.css";
import { useApollo } from "../lib/apolloClient";
import styles from "../styles/Layout.module.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout className={styles.layout}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

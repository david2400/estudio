/** @format */

import React from "react";
import "@styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import makeStore from "@/store";
import { PersistGate as PersistProvider } from "redux-persist/integration/react";
import Layout from "@/layout/home";
import { ThemeProvider } from "@material-tailwind/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { store, persistor } = makeStore;

  return (
    <Provider store={store}>
      <PersistProvider loading={null} persistor={persistor}>
          <Layout>
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </Layout>
      </PersistProvider>
    </Provider>
  );
};

export default MyApp;

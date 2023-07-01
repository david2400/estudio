/** @format */

import React from 'react';
import '@styles/globals.css';
import { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';
import makeStore from '@/store';
import { PersistGate as PersistProvider } from 'redux-persist/integration/react';
import { IntlProvider } from 'react-intl';
import Layout from '@/layout/home';
import { ThemeProvider } from '@material-tailwind/react';
import useLanguage from '@hooks/useLanguage';

const LanguageProvider = ({ children }: any) => {
  const { idiom } = useSelector(
    ({ language }: { language: { idiom: string } }) => ({ ...language }),
  );
  const languageData = useLanguage(idiom);

  return (
    <IntlProvider messages={languageData} locale={idiom}>
      {children}
    </IntlProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { store, persistor } = makeStore;

  return (
    <Provider store={store}>
      <PersistProvider loading={null} persistor={persistor}>
        <LanguageProvider>
          <Layout>
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </Layout>
        </LanguageProvider>
      </PersistProvider>
    </Provider>
  );
};

export default MyApp;

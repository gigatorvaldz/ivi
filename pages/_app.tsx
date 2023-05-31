import '@/styles/App.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import { useEffect } from 'react';
import { setIsAuth } from '@/redux/features/authReducer';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.dispatch(setIsAuth(true));
    } else {
      store.dispatch(setIsAuth(false));
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);

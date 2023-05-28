import '@/styles/App.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);

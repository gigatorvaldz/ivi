import '@/styles/App.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import { useEffect } from 'react';
import { setIsAuth } from '@/redux/features/authReducer';

export default function App({ Component, ...rest }: AppProps) {
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
}

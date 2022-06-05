/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { RecoilRoot } from 'recoil';
import * as Components from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Components.MetaLayout>
        <Component {...pageProps} />
      </Components.MetaLayout>
    </RecoilRoot>
  );
}

export default MyApp;

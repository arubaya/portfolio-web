/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import Head from 'next/head';
import * as Material from '@mui/material';
import * as recoil from 'recoil';

import Header from './Header';
import theme from '../utils/theme';
import * as store from '../recoil';

export default function MetaLayout(props) {
  const colorMode = recoil.useRecoilValue(store.colorModeState);
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="./logo192.png" />
        <link rel="manifest" href="./manifest.json" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Arubaya - Frontend Web Developer</title>
        <meta name="title" content="Arubaya - Frontend Web Developer" />
        <meta
          name="description"
          content="Tsabit Arubaya's portfolio website"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arubaya.github.io/" />
        <meta property="og:title" content="Arubaya - Frontend Web Developer" />
        <meta
          property="og:description"
          content="Tsabit Arubaya's portfolio website"
        />
        <meta property="og:image" content="./image-meta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arubaya.github.io/" />
        <meta property="twitter:title" content="Arubaya - Frontend Web Developer" />
        <meta
          property="twitter:description"
          content="Tsabit Arubaya's portfolio website"
        />
        <meta property="twitter:image" content="./image-meta.png" />
      </Head>
      <Material.ThemeProvider theme={Material.createTheme(theme(colorMode))}>
        <Material.Box
          sx={{
            width: '100%',
            height: 'fit-content',
            backgroundColor: 'background.default',
            color: 'text.primary',
            position: 'absolute',
          }}
        >
          <Header />
          {props.children}
        </Material.Box>
      </Material.ThemeProvider>
    </div>
  );
}

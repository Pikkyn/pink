import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import React from "react";
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <ConfigProvider theme={theme}>
      <Component {...pageProps} />
      </ConfigProvider>
    </ThirdwebProvider>
    
  );
}

export default MyApp;

import { SWRConfig } from "swr";

import "../styles/globals.css";

import { AuthProvider } from "./../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SWRConfig
        value={{
          refreshInterval: 10,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </AuthProvider>
  );
}

export default MyApp;

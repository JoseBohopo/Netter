import AppLayout from "eplant/components/Layouts/AppLayout";
import { AuthContextProvider } from "eplant/context/authContext";
import "eplant/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AuthContextProvider>
  );
}

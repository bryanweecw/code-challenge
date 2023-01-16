import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <Component {...pageProps} />
    </>
  );
}

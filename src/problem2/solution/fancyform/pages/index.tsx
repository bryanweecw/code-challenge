import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/templates/layout";
import ETHWallet from "@/components/ETHWallet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="h-screen bg-white flex justify-center">
        {/* <div className="px-5 mt-5 mb-1 font-bold text-xl text-left">
          Fancy Form
        </div> */}
        <div className="mx-5 my-5 w-5/6 px-5 drop-shadow-sm border border-slate-300 rounded-sm h-max pt-8 py-3">
          <ETHWallet />
        </div>
      </div>
    </Layout>
  );
}

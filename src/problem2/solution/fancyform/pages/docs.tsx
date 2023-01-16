import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/templates/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Docs() {
  return (
    <Layout>
      <div className="h-auto bg-white flex justify-center">
        <div className="bg-white mx-5 my-5 w-5/6 px-5 drop-shadow-sm border border-slate-300 rounded-sm h-max py-8">
          <div className="font-bold text-xl text-left px-5 mb-2">
            Welcome to Fancy Form
          </div>
          <div>
            <p className="text-justify px-5 mt-2 mb-5">
              Fancy Form is built by{" "}
              <a href="https://www.github.com/bryanweecw" target="_blank">
                Bryan Wee
              </a>
              , as part of a coding challenge for Switcheo. I'm so glad you're
              here.
            </p>
            <p className="text-lg font-bold text-left px-5 ">
              How do I use Fancy Form?
            </p>
            <p className="text-justify px-5 my-2">
              Great question! As a proof of concept, Fancy Form doesn't do much.
              Sad, I know. But, you may use the following template to test out
              the proposed UI.
            </p>
            <p className="text-justify px-5 my-2">
              When prompted for a ETH address, please use:{" "}
              <code className="bg-slate-200">f4ke4ddr3ss4y0u</code>
            </p>
            <p className="text-justify px-5 mt-2 mb-5">
              When prompted for an OTP, please use:{" "}
              <code className="bg-slate-200">78993</code>
            </p>
            <p className="text-lg font-bold text-left px-5 ">
              Wait, that doesn't look like a proper wallet address!
            </p>
            <p className="text-justify px-5 mt-2 mb-2">
              Too bad. Okay, yes it doesn't but I thought it'd be better if it
              was easy to type.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

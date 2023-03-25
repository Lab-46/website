/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lab 46</title>
        <meta name="description" content="Crafting high quality software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <div className="h-screen flex items-center justify-center flex-col gap-6 sm:gap-9 p-10">
          <img className="w-80 md:w-96" src="/logo.png" alt="Lab 46 logotype" />
        </div>
      </main>
    </>
  );
}

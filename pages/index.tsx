/* eslint-disable @next/next/no-img-element */
import Seo from "../components/Seo";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Seo />

      <main className={inter.className}>
        <div className="h-screen flex items-center justify-center flex-col gap-6 sm:gap-9 p-10">
          <img className="w-80 md:w-96" src="/logo.png" alt="Lab 46 logotype" />
        </div>
      </main>
    </>
  );
}

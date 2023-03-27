/* eslint-disable @next/next/no-img-element */
import Seo from "../components/Seo";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Seo />

      <main className={inter.className}>
        <div className="min-h-screen max-w-screen-xl mx-auto flex items-center justify-center flex-col p-10">
          <img src="/pattern.png" alt="" />
        </div>
      </main>
    </>
  );
}

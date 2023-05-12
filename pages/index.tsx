/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo />

      <header
        className="w-full h-[80vh] sm:h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/iceland.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

        <nav className="w-full max-w-screen-2xl mx-auto pt-6 px-6 relative flex items-start justify-between">
          <img className="w-20" src="/icon-white.svg" alt="" />

          <div className="flex flex-col items-end gap-1.5 sm:gap-2 text-white leading-none">
            <p className="sm:text-lg">Crafting high-quality software</p>
            <p className="text-sm sm:text-base">高品質なソフトウェアの作成</p>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center relative">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.raycast.com/albingroen/stockholm-public-transport"
          >
            <img
              src="/sl-departures.png"
              className="w-full max-w-[900px] sm:hover:scale-105 transition duration-700"
              alt=""
            />
          </a>
        </div>
      </header>

      <section className="h-[80vh] sm:h-screen flex items-center justify-center p-8">
        <Image
          alt=""
          height={2180}
          width={1404}
          src="/pattern.png"
          className="w-full max-w-screen-lg"
          loading="lazy"
        />
      </section>
    </>
  );
}

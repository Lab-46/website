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

        <nav className="relative flex items-start justify-between w-full px-6 pt-6 mx-auto max-w-screen-2xl">
          <img className="w-16 sm:w-20" src="/icon-white.svg" alt="" />
        </nav>

        <div className="relative flex items-center justify-center flex-1">
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

      <section className="h-[50vh] sm:h-screen flex items-center justify-center p-8">
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

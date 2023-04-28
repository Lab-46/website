/* eslint-disable @next/next/no-img-element */
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo />

      <header
        className="h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/iceland.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

        <nav className="w-full max-w-screen-2xl mx-auto pt-6 px-6 relative flex items-start justify-between">
          <img className="w-20" src="/icon-white.svg" alt="" />
        </nav>

        <div className="flex-1 flex items-center justify-center relative">
          <img
            src="/sl-departures.png"
            className="w-full max-w-[900px]"
            alt=""
          />
        </div>
      </header>
    </>
  );
}

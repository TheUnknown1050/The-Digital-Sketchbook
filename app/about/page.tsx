import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <main className="w-full h-screen flex">
      <div className="w-2/5 h-full bg-[#111717] flex justify-end">
        <div className="w-4/5 mt-[15%] mb-auto sm:max-w-3xl z-10">
          <h2 className="text-5xl font-extrabold mb-2 pt-24 text-left text-white">
            Who is
            <span className="bg-clip-text text-transparent font-black bg-gradient-to-r from-red-600 to-pink-600">
              {" "}
              Gawx?
            </span>
          </h2>

          <p className="text-white text-left font-semibold leading-relaxed">
            Gawx is not only a talented artist and but also a self taught
            filmmaker from Mexico. In an attempt to prioritize pineapple and
            crocs, Gawx has built a passionate following in the art community.
          </p>

          <p className="text-white text-left font-semibold pt-3 leading-relaxed">
            For over half a decade now, Gawx has been inspiring individuals
            around the world.
          </p>

          <a
            href="/"
            className="w-3/4 mt-16 btn text-black font-bold text-base bg-gray-100 hover:bg-gray-200 hover:scale-105 flex flex-row z-40"
          >
            Home
            <div className="h-full flex flex-col justify-center">
              <FontAwesomeIcon
                icon={faHome}
                width={20}
                height={20}
                className="text-2xl"
              />
            </div>
          </a>
        </div>

        <div
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-[#1e2324] to-30%"
          style={{ top: "64.8px" }}
        />
      </div>
      <div
        className="w-3/5 h-full bg-left bg-cover"
        style={{ backgroundImage: "url(/media/about.png)" }}
      >
        <div className="relative inset-0 w-full h-full bg-gradient-to-r from-[#111717] to-20%" />
      </div>
    </main>
  );
}

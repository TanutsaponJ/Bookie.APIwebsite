import Button from "../../Layout/Button/Button";

import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Collection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-[url('/public/images/Collection.png')] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20 h-screen max-w-screen-2xl mx-auto relative">
      <div className="bg-black/50 absolute top-0 left-0 w-full h-full" />
      <div className="w-full h-full flex flex-col justify-center text-center text-white p-4 gap-4 z-0">
        <div className="z-10">
          <h1
            data-Aos="fade-up"
            data-Aos-duration="7000"
            className="font-bodoni flex flex-col text-6xl font-light uppercase italic"
          >
            Exploring Worlds : A Diverse
            <span className="mt-3 animated-text text-6xl font-extrabold">
              Literary Journey
            </span>
          </h1>
        </div>
        <div className="z-10">
          <p
            data-Aos="fade-left"
            data-Aos-duration="5000"
            className="mt-4  text-2xl font-sm font-bodoni"
          >
            Our Exploring Worlds collection celebrates the beauty of diverse
            storytelling, inviting readers to embark on an enriching journey
            through a multitude of narratives, genres, and perspectives.
          </p>
          <p
            data-Aos="fade-right"
            data-Aos-duration="7000"
            className="mt-4  text-2xl font-sm font-bodoni"
          >
            Discover captivating stories from various cultures and regions
            worldwide, offering a rich tapestry of traditions, beliefs, and
            customs.
          </p>
          <p
            data-Aos="fade-up"
            data-Aos-duration="6000"
            className="mt-4  text-2xl font-sm font-bodoni"
          >
            Delve into a spectrum of genres, from gripping thrillers and
            heartwarming romances to thought-provoking historical narratives and
            fantastical adventures.
          </p>
        </div>

        <div className="flex justify-center mt-4 w-full z-10">
          <Button title="Discover More" font="bodoni" />
        </div>
      </div>
    </div>
  );
};

export default Collection;

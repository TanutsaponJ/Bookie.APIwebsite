import Button from "../../Layout/Button/Button";
import HeroImage from "/public/images/heroImage.jpg";
import { GiClick } from "react-icons/gi";

// Function to render the hero image
const renderHeroImage = () => (
  <div className="md:w-1/2 w-full relative md:mt-6">
    <img
      src={HeroImage}
      alt="heroImage"
      className="h-full md:h-[562px] md:w-auto w-full items-center rounded-xl "
    />
    <div className="bg-black/30 absolute top-0 left-0 w-full h-full rounded-xl" />
  </div>
);

const Hero = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-12 mt-10">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-14 md:px-14">
        {/* Render the hero image */}
        {renderHeroImage()}

        <div className="md:w-1/2 px-6">
          <h1 className="text-3xl font-bodoni font-semibold mb-7">
            A room without books is Like{" "}
            <span className="text-accentColor">a body without soul</span>
          </h1>
          <p className="text-xl mb-7">
            Welcome to a literary haven where stories come alive! Our bookshelf
            is a gateway to adventure, knowledge, and imagination.
          </p>
          <Button title="Read More" icon={<GiClick />} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

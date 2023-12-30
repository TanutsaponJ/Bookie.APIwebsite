import { Link } from "react-router-dom";
import Button from "../../Layout/Button/Button";

const Gallery = () => {
  const Images = [
    "/public/Images/GalleryImages/gallery1.jpg",
    "/public/Images/GalleryImages/gallery2.jpg",
    "/public/Images/GalleryImages/gallery3.jpg",
    "/public/Images/GalleryImages/gallery4.jpg",
    "/public/Images/GalleryImages/gallery5.jpg",
    "/public/Images/GalleryImages/gallery6.jpg",
    "/public/Images/GalleryImages/gallery7.jpg",
    "/public/Images/GalleryImages/gallery8.jpg",
  ];

  return (
    <div className="max-w-screen-2xl mx-auto container px-4 py-6">
      <h2 className="title">Welcome To Own Gallery</h2>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-4 mx-auto">
        {Images.map((imagesUrl, i) => (
          <Link to="/" key={i}>
            <img
              src={imagesUrl}
              alt={i}
              className="w-full md:w-[550px] xl:w-[650px] h-[230px]"
            />
          </Link>
        ))}
      </div>

      <div>
        <h2 className="title">Or subscribe to the newsletter</h2>
        <form className="md:w-1/2 mx-auto text-center flex items-center justify-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email here..."
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4 "
          />
          <Button title="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Gallery;

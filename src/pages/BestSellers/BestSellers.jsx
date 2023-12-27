// Import necessary modules and components
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Configuration for the Swiper component
const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
  className: "mySwiper",
};

// Function to render each book
const renderBook = (item) => {
  // Extract necessary data from the item
  const thumbnail = item.volumeInfo?.imageLinks?.thumbnail;
  const title = item.volumeInfo?.title;
  const amount = item.saleInfo?.listPrice?.amount;

  // Return the JSX for each book
  return (
    <SwiperSlide key={item.id}>
      <Link to={`/book/${item.id}`}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full mx-auto hover:scale-105 transition-all duration-300"
        />
      </Link>
      <div className="mt-4 px-4">
        <h1 className="text-base font-semibold mb-2">{title}</h1>
      </div>

      <div className="flex justify-between">
        <p className="text-textColor/70">{item.volumeInfo?.authors}</p>
        <p className="font-semibold">{amount}</p>
      </div>
    </SwiperSlide>
  );
};

// BestSellers component
const BestSellers = ({ book }) => {
  // State for the product
  const [product, setProduct] = useState([book]);

  // Update the product state when the book prop changes
  useEffect(() => {
    setProduct(book);
  }, [book]);

  // Return the JSX for the component
  return (
    <div className="max-w-screen-2xl container mx-auto px-4">
      <div>
        <h2 className="title">Best Sellers</h2>
        <p className="text-textColor capitalize md:w-2/3 mx-auto text-center mb-8">
          Welcome to our Best Sellers section, where literary greatness meets
          popular acclaim! Dive into the pulse of current reading trends and
          unearth the books that have captured the hearts and minds of readers
          worldwide. Handpicked and curated based on their widespread
          popularity, these books stand as testaments to captivating
          storytelling, engaging narratives, and profound themes that resonate
          with diverse audiences.
        </p>
      </div>

      <div>
        <Swiper {...swiperConfig}>
          {product.slice(0, 10).map(renderBook)}
        </Swiper>
      </div>
    </div>
  );
};

// Prop types for the BestSellers component
BestSellers.propTypes = {
  book: PropTypes.array.isRequired,
};

// Export the BestSellers component
export default BestSellers;

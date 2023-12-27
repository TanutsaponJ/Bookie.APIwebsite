import PropTypes from "prop-types";
import Button from "../Button/Button";

const BookDetail = ({ books }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-16 mx-auto ">
      {books.slice(0, 8).map((book, index) => {
        const thumbnail = book.volumeInfo?.imageLinks?.thumbnail;
        const title = book.volumeInfo.title;
        const amount = book.saleInfo?.listPrice?.amount;

        return (
          <div key={index} className="shadow-lg h-full bg-backgroundColor ">
            <img
              src={thumbnail}
              alt={book.title}
              className="mx-auto w-auto hover:scale-105 transition-all duration-300 p-4"
            />
            <div className="mt-4 px-4">
              <div className=" mb-2 flex flex-wrap gap-2">
                <h3 className="text-2xl font-semibold ">{title}</h3>
                <p className="text-lg font-md">{book.volumeInfo.authors}</p>
              </div>
              <div className="flex justify-between mt-4 mb-4">
                <h3 className="font-md">{book.volumeInfo.publishedDate}</h3>
                <p className="font-bold">{amount} $</p>
              </div>
            </div>
            <div className="flex justify-center my-2">
              <Button title="Buy Now !" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

BookDetail.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookDetail;

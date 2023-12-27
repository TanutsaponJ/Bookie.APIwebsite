import { FaFilter } from "react-icons/fa";
import BookDetail from "../../Layout/BookDetail/BookDetail";
import { useEffect, useState } from "react";
import Button from "../../Layout/Button/Button";

import PropTypes from "prop-types";

// const URL = "https://www.googleapis.com/books/v1/volumes?q=Poetry&key=";
// const MAX = "&maxResults=40";

const Books = ({ book, fetchData }) => {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(category, currentPage);
  }, [category, currentPage]);

  const handleButtonClick = (category) => {
    setCategory(category);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(book.length / 12);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1); // Add a function to handle going to the next page
  const handlePrevPage = () =>
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage)); // Add a function to handle going to the previous page

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 mb-12">
      <h2 className="title font-bodoni">
        Journey Through Literary Realms: Explore Our Diverse Categories
      </h2>
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <Button
              title="All Books"
              onClick={() => handleButtonClick("all")}
              active={category === "all"}
            />
            <Button
              title="Poetry"
              onClick={() => handleButtonClick("Poetry")}
              active={category === "Poetry"}
            />
            <Button
              title="Fiction"
              onClick={() => handleButtonClick("Fiction")}
              active={category === "Fiction"}
            />
            <Button
              title="Computer"
              onClick={() => handleButtonClick("Computer")}
              active={category === "Computer"}
            />
            <Button
              title="Programer"
              onClick={() => handleButtonClick("Programer")}
              active={category === "Programer"}
            />
          </div>

          <div className="flex justify-end mb-4 rounded-md border border-primaryColor">
            <div className="bg-secondaryColor p-2 flex items-center">
              <FaFilter className="text-textColor h-4 w-4" />
              <div>
                <select
                  id="sort"
                  className="bg-secondaryColor text-textColor font-semibold px-2 py-2
                "
                >
                  <option value="default">Default</option>

                  <option value="2020">2020+</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <BookDetail books={book} />
      </div>
      <div className="max-w-screen-2xl container mx-auto px-4 mb-12 flex justify-between mt-10">
        <Button onClick={handlePrevPage} title="Previous Page" />
        {pageNumbers.map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => handleNextPage(pageNumber)}
            title={`Page ${pageNumber}`}
          />
        ))}
        <Button onClick={handleNextPage} title="Next Page" />
      </div>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default Books;

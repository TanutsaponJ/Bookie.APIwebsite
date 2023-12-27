import { FaFilter } from "react-icons/fa";
import BookDetail from "../../Layout/BookDetail/BookDetail";
import { useEffect, useState } from "react";
import Button from "../../Layout/Button/Button";
import PropTypes from "prop-types";

const Books = ({ book, fetchData }) => {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data when category or currentPage changes
  useEffect(() => {
    fetchData(category, currentPage);
  }, [category, currentPage]);

  // Handle button click and set category and currentPage
  const handleButtonClick = (category) => {
    setCategory(category);
    setCurrentPage(1);
  };

  // Calculate total pages and page numbers
  const totalPages = Math.ceil(book.length / 12);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle next and previous page
  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePrevPage = () =>
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));

  // Render each category button
  const renderButton = (title) => (
    <Button
      title={title}
      onClick={() => handleButtonClick(title)}
      active={category === title}
    />
  );

  // Render each page number
  const renderPageNumber = (pageNumber) => (
    <Button
      key={pageNumber}
      onClick={() => handleNextPage(pageNumber)}
      title={`Page ${pageNumber}`}
    />
  );

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 mb-12">
      <h2 className="title font-bodoni">
        Journey Through Literary Realms: Explore Our Diverse Categories
      </h2>
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            {["All Books", "Poetry", "Fiction", "Computer", "Programer"].map(
              renderButton
            )}
          </div>

          <div className="flex justify-end mb-4 rounded-md border border-primaryColor">
            <div className="bg-secondaryColor p-2 flex items-center">
              <FaFilter className="text-textColor h-4 w-4" />
              <div>
                <select
                  id="sort"
                  className="bg-secondaryColor text-textColor font-semibold px-2 py-2"
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
        {pageNumbers.map(renderPageNumber)}
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

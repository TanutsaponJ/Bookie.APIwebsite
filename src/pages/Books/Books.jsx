import { FaFilter } from "react-icons/fa";
import BookDetail from "../../Layout/BookDetail/BookDetail";
import { useEffect, useState } from "react";
import Button from "../../Layout/Button/Button";

// const URL = "https://www.googleapis.com/books/v1/volumes?q=Poetry&key=";
// const MAX = "&maxResults=40";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
const KEY = `&key=${import.meta.env.VITE_BOOK_API_KEY}`;
const MAX_RESULTS = "&maxResults=40";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [fitterItem, setFitterItem] = useState([]);
  const [category, setCategory] = useState("All");

  const fetchData = async (category) => {
    const QUERY = `q=${category}`;
    try {
      const res = await fetch(`${BASE_URL}${QUERY}${KEY}${MAX_RESULTS}`);
      const data = await res.json();
      setBooks(data.items);
      setFitterItem(data.items);
    } catch (error) {
      console.log("Error fetching data :", error);
    }
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  const handleButtonClick = (category) => {
    setCategory(category);
  };

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
            />
            <Button
              title="Poetry"
              onClick={() => handleButtonClick("Poetry")}
            />
            <Button
              title="Fiction"
              onClick={() => handleButtonClick("Fiction")}
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

        <BookDetail books={books} />
      </div>
    </div>
  );
};

export default Books;

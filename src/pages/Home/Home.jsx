import { useState, useEffect } from "react";
import BestSellers from "../BestSellers/BestSellers";
import Books from "../Books/Books";
import Collection from "../Collection/Collection";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";

// Base URL for the Google Books API
const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
// API key for the Google Books API
const KEY = `&key=${import.meta.env.VITE_BOOK_API_KEY}`;
// Maximum number of results to fetch
const MAX_RESULTS = "&maxResults=40";

const Home = () => {
  const [books, setBooks] = useState([]);

  // Function to fetch books by category
  const fetchBooksByCategory = async (category) => {
    // Construct the query string
    const query = `q=${category}`;
    // Construct the full URL for the API request
    const url = `${BASE_URL}${query}${KEY}${MAX_RESULTS}`;

    try {
      // Fetch the data from the API
      const response = await fetch(url);
      // Parse the JSON response
      const data = await response.json();
      // Set the books state
      setBooks(data.items);
    } catch (error) {
      // Log any errors
      console.error("Error fetching data: ", error);
    }
  };

  // Fetch all books when the component mounts
  useEffect(() => {
    fetchBooksByCategory("all");
  }, []);

  return (
    <div>
      <Hero />
      {/* Pass the books and the fetch function as props to the Books component */}
      <Books book={books} fetchData={fetchBooksByCategory} />
      <Collection />
      {/* Pass the books as props to the BestSellers component */}
      <BestSellers book={books} />
      <Gallery />
    </div>
  );
};

export default Home;

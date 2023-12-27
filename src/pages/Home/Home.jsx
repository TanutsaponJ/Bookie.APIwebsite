import { useState, useEffect } from "react";
import BestSellers from "../BestSellers/BestSellers";
import Books from "../Books/Books";
import Collection from "../Collection/Collection";
import Hero from "../Hero/Hero";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
const KEY = `&key=${import.meta.env.VITE_BOOK_API_KEY}`;
const MAX_RESULTS = "&maxResults=40";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooksByCategory = async (category) => {
    const query = `q=${category}`;
    const url = `${BASE_URL}${query}${KEY}${MAX_RESULTS}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchBooksByCategory("all"); // Fetch all books when the component mounts
  }, []);

  return (
    <div>
      <Hero />
      <Books book={books} fetchData={fetchBooksByCategory} />
      <Collection />
      <BestSellers book={books} />
    </div>
  );
};

export default Home;

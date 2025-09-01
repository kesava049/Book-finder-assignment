"use client";

import { useState, FormEvent } from "react";
import { SearchBar } from "./SearchBar";
import { BookCard } from "./BookCard";
import { useBooks } from "../server_actions/books";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const { books, loading, error, fetchBooks } = useBooks();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    fetchBooks(query);
  }

  return (
    <div className="w-screen h-screen bg-gray-50 p-4 max-w-full mx-auto flex flex-col items-center overflow-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Book Finder</h1>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} loading={loading} />

      {error && <p className="text-center text-red-600 font-semibold mb-6">{error}</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {books.map((book) => (
          <BookCard
            key={book.key}
            coverId={book.cover_i}
            title={book.title}
            authors={book.author_name}
            publishYear={book.first_publish_year}
          />
        ))}
      </ul>
    </div>
  );
}

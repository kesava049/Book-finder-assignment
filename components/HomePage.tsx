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
    <div className="min-h-screen w-full bg-gray-50 p-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Book Finder
      </h1>

      {/* Search Bar */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        loading={loading}
      />

      {/* Error Message */}
      {error && (
        <p className="text-center text-red-600 font-semibold mb-6">{error}</p>
      )}

      {/* Results */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl px-2 sm:px-4">
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
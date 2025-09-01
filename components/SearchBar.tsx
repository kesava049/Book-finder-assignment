import React, { FormEvent } from "react";

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  onSearch: (e: FormEvent) => void;
  loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  onSearch,
  loading,
}) => {
  return (
    <form
      onSubmit={onSearch}
      className="flex max-w-md mx-auto mb-8"
      role="search"
      aria-label="Book search form"
    >
      <input
        type="text"
        placeholder="Search by book title..."
        className="flex-grow p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Book title"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 rounded-r-md hover:bg-blue-700 transition"
        disabled={loading || !query.trim()}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

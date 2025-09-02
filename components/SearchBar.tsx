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
      className="flex flex-col sm:flex-row items-stretch gap-2 mb-6 w-full max-w-lg mx-auto px-4"
      role="search"
      aria-label="Book search form"
    >
      <input
        type="text"
        placeholder="Search by book title..."
        className="flex-grow p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Book title"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
        disabled={loading || !query.trim()}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};
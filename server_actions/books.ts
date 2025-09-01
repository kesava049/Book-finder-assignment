import { useState } from "react";

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchBooks(title: string) {
    if (!title.trim()) return;
    setLoading(true);
    setError(null);
    setBooks([]);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(
          title
        )}&limit=20`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      if (data.num_found === 0) {
        setError("No results found");
      } else {
        setBooks(data.docs);
      }
    } catch {
      setError("Error fetching books. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return { books, loading, error, fetchBooks };
}

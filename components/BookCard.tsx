import React from "react";

interface BookCardProps {
  coverId?: number;
  title: string;
  authors?: string[];
  publishYear?: number;
}

export const BookCard: React.FC<BookCardProps> = ({
  coverId,
  title,
  authors,
  publishYear,
}) => {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "/no-cover.png";

  return (
    <li className="bg-white rounded-md shadow p-4 flex flex-col items-center text-center">
      <img
        src={coverUrl}
        alt={title}
        className="mb-4 w-32 h-48 object-cover rounded-md"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-700 mb-1">
        {authors && authors.length > 0 ? authors.join(", ") : "Unknown Author"}
      </p>
      {publishYear && (
        <p className="text-gray-500 text-sm">First published: {publishYear}</p>
      )}
    </li>
  );
};

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
    <li className="bg-white rounded-lg shadow p-3 sm:p-4 flex flex-col items-center text-center transition hover:shadow-md">
      {/* Cover */}
      <img
        src={coverUrl}
        alt={title}
        className="mb-3 sm:mb-4 w-24 h-36 sm:w-32 sm:h-48 object-cover rounded-md"
        loading="lazy"
      />

      {/* Title */}
      <h2 className="text-base sm:text-lg font-semibold mb-1 line-clamp-2">
        {title}
      </h2>

      {/* Authors */}
      <p className="text-gray-700 text-sm sm:text-base mb-1 line-clamp-1">
        {authors && authors.length > 0 ? authors.join(", ") : "Unknown Author"}
      </p>

      {/* Publish Year */}
      {publishYear && (
        <p className="text-gray-500 text-xs sm:text-sm">
          First published: {publishYear}
        </p>
      )}
    </li>
  );
};
import { BookItem } from "@/app/_hooks/useBooks";
import Link from "next/link";
import React from "react";
import { FavoriteButton } from "../favoriteButton";

type CardProps = {
  cardData: BookItem;
};

function Card({ cardData: Book }: CardProps) {
  return (
    <div className="relative group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton Book={Book} />
      </div>

      <Link href={`/books/${Book.id}`} className="block h-full p-4">
        <div className="aspect-[3/4] bg-black rounded-lg mb-4 overflow-hidden">
          {Book.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={Book.volumeInfo.imageLinks.thumbnail}
              alt={Book.volumeInfo.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-black">
              No cover
            </div>
          )}
        </div>

        <h3 className="font-semibold text-lg text-black truncate">
          {Book.volumeInfo.title}
        </h3>
        {Book.volumeInfo.authors && (
          <p className="text-gray-600 text-sm truncate">
            {Book.volumeInfo.authors.join(", ")}
          </p>
        )}
      </Link>
    </div>
  );
}

export default React.memo(Card);

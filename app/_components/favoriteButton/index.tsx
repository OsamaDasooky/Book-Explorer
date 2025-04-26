"use client";

import { BookItem } from "@/app/_hooks/useBooks";
import { useFavorites } from "@/app/_hooks/useFavorites";

type FavoriteButtonProps = {
  Book: BookItem;
};
export function FavoriteButton({ Book }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  return (
    <button
      onClick={() => toggleFavorite(Book)}
      className={`px-2 rounded-[50%] bg-[#c5c2c296] text-2xl ${
        isFavorite(Book.id) ? "text-red-500" : "text-[#fff]"
      }`}
    >
      ♥
    </button>
  );
}

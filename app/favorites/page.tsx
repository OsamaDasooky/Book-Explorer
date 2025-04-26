'use client'
import { BookItem } from "../_hooks/useBooks";
import { useFavorites } from "../_hooks/useFavorites";
import Card from "../_components/card";

export default function Home() {
const { savedFavorites } = useFavorites()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Favorite Books</h1>
      {savedFavorites.length === 0 ? (
        <p>No favorite books yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {savedFavorites.map((data: BookItem) => (<Card cardData={data} key={data.id}/>))}
      </div>
      )}
    </div>
  );
}

"use client";
import Card from "./_components/card";
import { BookItem, useBooks } from "./_hooks/useBooks";
import SearchBar from "./_components/searchBar";
import LoadingSpinner from "./loading";
import ErrorMessage from "./error";

export default function Home() {
  const { data, isLoading, error } = useBooks('orderBy=relevance&q=computer');

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="mx-auto">
      <SearchBar />
      <h1 className="text-3xl font-bold mb-6">Popular Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.items.map((data: BookItem) => (
          <Card cardData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

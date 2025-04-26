"use client";
import { useSearchParams } from "next/navigation";
import { BookItem, useSearchBooks } from "../_hooks/useBooks";
import LoadingSpinner from "../loading";
import ErrorMessage from "../error";
import Card from "../_components/card";
import SearchBar from "../_components/searchBar";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = `q=${searchParams.get('q')}`;
  const { data, isLoading, error } = useSearchBooks(query);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.items.map((data: BookItem) => (
          <Card cardData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

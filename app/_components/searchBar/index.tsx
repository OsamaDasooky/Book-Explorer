"use client";
import { Button } from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const handleSearch = (searchQuery: string) => {
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };
  return (
    <div className="grid grid-cols-3 w-full md:w-[50%] mx-auto text-slate-700 text-sm border border-slate-200 rounded-md mb-4">
      <input
        className="col-span-2 bg-transparent w-full placeholder:text-slate-400 text-white px-2  py-2 focus:outline-none"
        placeholder="search by name and title "
        value={query}
        onChange={handleChange}
      />
      <Button
        className="col-span-1 bg-[#780c0c] rounded-md px-3 py-1.5  text-white cursor-pointer "
        onClick={() => handleSearch(query)}
      >
        Search
      </Button>
    </div>
  );
}
export default React.memo(SearchBar);

'use client';
import { FavoriteButton } from "@/app/_components/favoriteButton";
import { useBookDetails } from "@/app/_hooks/useBooks";
import ErrorMessage from "@/app/error";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";


export default function BookPage() {
    const { id } = useParams()
    const { data:book, error, isLoading } = useBookDetails(id);
    
    if (isLoading) return <LoadingSpinner />;
    if (error || !book) return <ErrorMessage message={error?.message || 'Error fetching book details or the book is not found'} />;


  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        {/* Book Cover */}
        <div className="bg-gray-100 rounded-lg p-4">
          {book.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="w-full rounded-lg"
            />
          ) : (
            <div className="aspect-[3/4] flex items-center justify-center text-gray-500">
              No cover available
            </div>
          )}
        </div>

        {/* Book Details */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{book.volumeInfo.title}</h1>
            <FavoriteButton Book={book} />
          </div>

          {book.volumeInfo.authors && (
            <p className="text-lg text-gray-600 mb-4">
              by {book.volumeInfo.authors.join(', ')}
            </p>
          )}

          {book.volumeInfo.description && (
            <div className="prose mb-4">
              <p>{book.volumeInfo.description}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm">
            {book.volumeInfo.pageCount && (
              <div>
                <span className="font-semibold">Pages:</span> {book.volumeInfo.pageCount}
              </div>
            )}
            {book.volumeInfo?.averageRating && (
              <div>
                <span className="font-semibold">Rating:</span> {book.volumeInfo?.averageRating}/5
              </div>
            )}
            {book.volumeInfo.categories && (
              <div className="col-span-2">
                <span className="font-semibold">Categories:</span>{' '}
                {book.volumeInfo.categories.join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
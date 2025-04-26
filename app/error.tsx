'use client'
export default function ErrorMessage({ message }: { message?: string }) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-lg">
        <p>Oops! Something went wrong.</p>
        {message && <p className="text-sm mt-2">{message}</p>}
      </div>
    );
  }
'use client';

import { useEffect, useState } from 'react';
import { BookItem } from './useBooks';

export const useFavorites = () => {
  const [savedFavorites, setFavorites] = useState<BookItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    setFavorites(saved ? JSON.parse(localStorage.getItem('favorites')!).filter(Boolean) : []);
  }, []);
  
  const addFavorite = (bookData: BookItem) => {
    const favorites:BookItem[]  = JSON.parse(localStorage.getItem('favorites')!) || [];
    const newFavorites = [...favorites, bookData];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(prev => ([...newFavorites]));
  };

  const removeFavorite = (bookId: string) => {
    const favorites:BookItem[] = JSON.parse(localStorage.getItem('favorites')!)|| [];
    const newFavorites = favorites.filter(book => book.id !== bookId);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const isFavorite = (bookId: string) => savedFavorites.find(book => book.id === bookId);

  const toggleFavorite = (book:BookItem) => {
    isFavorite(book.id)
      ? removeFavorite(book.id)
      : addFavorite(book);
  };

  return { savedFavorites, addFavorite, removeFavorite, isFavorite, toggleFavorite };
};

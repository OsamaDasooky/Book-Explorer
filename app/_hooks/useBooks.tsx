import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../_helpers';
import { useParams } from 'next/navigation';
import { Params, ParamValue } from 'next/dist/server/request/params';

export type BookSearchResponse = {
  kind: string;
  totalItems: number;
  items: BookItem[];
};

export type BookItem = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: {
    textSnippet: string;
  };
};

export type VolumeInfo = {
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: {
    type: string;
    identifier: string;
  }[];
  readingModes?: {
    text: boolean;
    image: boolean;
  };
  pageCount?: number;
  printType?: string;
  categories?: string[];
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks?: {
    medium?: string;
    smallThumbnail?: string;
    thumbnail?: string;
  };
  language?: string;
  previewLink?: string;
  infoLink?: string;
  averageRating?: string
  canonicalVolumeLink?: string;
};

export type SaleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
};

export type AccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
    acsTokenLink?: string;
  };
  pdf: {
    isAvailable: boolean;
    acsTokenLink?: string;
  };
  webReaderLink?: string;
  accessViewStatus?: string;
  quoteSharingAllowed?: boolean;
};

  

export function useBooks(queryParams:string) {
  return useQuery({
    queryKey: ['books'],
    queryFn: () => fetcher<BookSearchResponse>(`https://www.googleapis.com/books/v1/volumes?${queryParams}`),
  });
}
export function useBookDetails(id:ParamValue) {
  return useQuery({
    queryKey: ['books', id],
    queryFn: () => fetcher<BookItem>(`https://www.googleapis.com/books/v1/volumes/${id}`),
    enabled: !!id,
  });
}

export function useSearchBooks(queryParams: string){
  return useQuery({
    queryKey: ['query', queryParams],
    queryFn: () => fetcher<BookSearchResponse>(`https://www.googleapis.com/books/v1/volumes?${queryParams}`),
    enabled: queryParams.length > 2,
    retry: false,
  });
}
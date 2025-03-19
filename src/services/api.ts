import axios from "axios";

export type UnsplashImage = {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string | null;
  [key: string]: any;
};

export type UnsplashResponse = {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
};

export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        query,
        page,
        per_page: 12,
        client_id: "oEHsE3LqDf-K6FZVdKDZzH-U29YSa11bSW_3bl5CxjE",
      },
    }
  );
  return response.data;
};

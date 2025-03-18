import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: "oEHsE3LqDf-K6FZVdKDZzH-U29YSa11bSW_3bl5CxjE",
    },
  });
  return response.data;
};

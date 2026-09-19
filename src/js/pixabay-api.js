import axios from "axios";

const API_KEY = "57649118-62b94d4ad4ce8d06ecb5f28ce";

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}
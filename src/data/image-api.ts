import axios from "axios";
import { SearchImage } from "../Types/Types";

export async function getImage(query: string, page: number) {
  const BASE_URL: string = "https://api.unsplash.com";
  const END_POINT: string = "/search/photos";
  const url: string = BASE_URL + END_POINT;
  const params = {
    query: query,
    page: page,
    per_page: 20,
    client_id: "d1ifJFELUOY7I6Qi3c7yxUHxXu7irkOiKD6RH8L5y3I",
  };

  const { data } = await axios.get<SearchImage>(url, { params });
  return data;
}

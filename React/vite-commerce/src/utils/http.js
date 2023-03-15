const BASE_URL = "https://dummyjson.com";

export const GET = async (endpoint = "/products") => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();

  return data;
};

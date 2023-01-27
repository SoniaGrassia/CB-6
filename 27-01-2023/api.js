const API_KEY = "?api_key=1518eb9c4a7e088d6a62d89d1024589c";
const BASE_URL = "https://api.themoviedb.org/3/";

//prova = https://api.themoviedb.org/3/tv/62560?api_key=1518eb9c4a7e088d6a62d89d1024589c

const GET = async (type, resource) => {
  const res = await fetch(`${BASE_URL}${type}/${resource}${API_KEY}`);
  const data = await res.json();
  return data;
};

export { GET };

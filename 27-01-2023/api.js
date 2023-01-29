const API_KEY = "?api_key=1518eb9c4a7e088d6a62d89d1024589c";
const BASE_URL = "https://api.themoviedb.org/3/";

//prova search film = https://api.themoviedb.org/3/tv/62560?api_key=1518eb9c4a7e088d6a62d89d1024589c

//prova search serie tv = https://api.themoviedb.org/3/search/tv?api_key=1518eb9c4a7e088d6a62d89d1024589c&query=wednesday&include_adult=false

//prova search in tutto il db =
//https://api.themoviedb.org/3/search/multi?api_key=1518eb9c4a7e088d6a62d89d1024589c&query=amore&include_adult=false

//prova tendenze settimanali = https://api.themoviedb.org/3/trending/all/week?api_key=1518eb9c4a7e088d6a62d89d1024589c

//per popolare la home
const GET1 = async (type, resource) => {
  const res = await fetch(`${BASE_URL}${type}/${resource}${API_KEY}`);
  const data = await res.json();
  return data;
};

//per avere la pagina "CERCA" già popolata con le tendenze dei film e delle serie
const GET2 = async (mode, media_type) => {
  const res = await fetch(`${BASE_URL}${mode}/${media_type}/week${API_KEY}`);
  const data = await res.json();
  return data;
};

//per popolare la pagina dopo la ricerca
const GET3 = async (mode, type, resource) => {
  const res = await fetch(
    `${BASE_URL}${mode}/${type}${API_KEY}&query=${resource}&include_adult=false`
  );
  const data = await res.json();
  return data;
};

export { GET1, GET2, GET3 };

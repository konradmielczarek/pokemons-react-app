import axios from "axios";

const baseURL = "http://localhost:4000";

export const getPokemons = async (limit, page = 1) => {
  const result = await axios.get(
    `${baseURL}/pokemon?_page=${page}&_limit=${limit}`
  );

  return {
    data: result.data,
    totalCount: parseInt(result.headers["x-total-count"]),
  };
};

export const getPokemon = async id => {
  const result = await axios.get(`${baseURL}/pokemon/${id}`);

  return result.data;
};

export const searchPokemons = async (text, limit, page = 1) => {
  const result = await axios.get(
    `${baseURL}/pokemon?name_like=${text}&_page=${page}&_limit=${limit}`
  );

  return {
    data: result.data,
    totalCount: parseInt(result.headers["x-total-count"]),
  };
};

import axios from "axios";

const baseURL = "http://localhost:4000";

export const getPokemons = async (limit, page = 1, searchTxt = '', filter = '') => {
  const result = await axios.get(
    `${baseURL}/pokemon?_page=${page}&_limit=${limit}&name_like=${searchTxt}&type_like${filter}`
  );

  return {
    data: result.data,
    totalCount: parseInt(result.headers["x-total-count"]),
  };
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
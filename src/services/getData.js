import axios from "axios";

export const getData = async (url, query) => {
  const { data: data } = await axios.get(url, {
    params: {
      search: query,
    },
  });

  return data;
};

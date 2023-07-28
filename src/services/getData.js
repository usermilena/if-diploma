import { useSelector } from "react-redux";

import { getRandomStatusAndBookholder } from "../random/getRandomStatus";

export const useData = async (url) => {
  const dataFromRedux = useSelector((state) => state.books.all);

  if (dataFromRedux.length < 1) {
    const response = await fetch(url);
    const data = await response.json();
    const dataWithRandomStatusAndBookholder =
      getRandomStatusAndBookholder(data);

    return dataWithRandomStatusAndBookholder;
  }

  return dataFromRedux;
};

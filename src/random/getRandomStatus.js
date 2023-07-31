import { bookholders } from "./bookholders";

export const getRandomStatusAndBookholder = (books) => {
  const statuses = ["Available", "Taken"];

  const booksWithRandomStatus = books.map((book) => ({
    ...book,
    status: statuses[Math.floor(Math.random() * 2)],
    rating: Math.floor(Math.random() * (5 - 3 + 1) + 3),
  }));

  const booksWithRandomBookholders = booksWithRandomStatus.map((book) => {
    if (book.status === "Taken") {
      return {
        ...book,
        bookholder: bookholders[Math.floor(Math.random() * 20)],
      };
    } else {
      return { ...book };
    }
  });

  return booksWithRandomBookholders;
};

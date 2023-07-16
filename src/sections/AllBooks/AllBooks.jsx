import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BooksList } from "../../components/BooksList";
import { booksUrl } from "../../constants/urls";
import { getData } from "../../services/getData";
import { setAllBooks } from "../../store/slices/books.slice";

export const AllBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.all);
  useEffect(() => {
    getData(booksUrl).then((books) => {
      dispatch(setAllBooks(books));
    });
  }, []);

  return <BooksList data={books} title="All books" />;
};

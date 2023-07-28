import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Button } from "../../components/Button";

export const BookPage = () => {
  let { bookId } = useParams({});
  const books = useSelector((state) => state.books.all);
  const book = books.filter((el) => el.id === bookId)[0];

  return (
    <div>
      <img src="" alt="" />
      <span>{book.rating}</span>
      <h3>{book.name}</h3>
      <h5>{book.author}</h5>
      <span>
        {book.length}, released in {book.released}
      </span>
      <Button text="Order" variant="contained" color="primary" />
      <h4>About book</h4>
      {book.description}
      <Button text="Show more" variant="contained" color="light" />
    </div>
  );
};

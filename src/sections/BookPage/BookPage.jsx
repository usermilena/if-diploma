import React from "react";

import { Button } from "../../components/Button";

export const BookPage = ({ book }) => {
  return (
    <div>
      <img src="" alt="" />
      <span>*Rating</span>
      <h3>{book.name}</h3>
      <h5>{book.author}</h5>
      <span>
        {book.length}, released in {book.released}
      </span>
      <Button text="Order" />
      <h4>About book</h4>
      {book.description}
    </div>
  );
};

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { BookService } from "./Book.service";
import { IBook } from "./Book.interface";

export function Book() {
  const navigate = useNavigate();
  const [book, setBook] = useState<IBook>();

  const { bookId } = useParams();

  // const getBook = async (bookId: string) => {
  //   const response = await bookService.getBook(bookId);
  //   setBook(response);
  // };

  const removeBook = async () => {
    const bookService = new BookService();
    console.log("Clicked!");
    if (bookId !== undefined) {
      await bookService.deleteBook(bookId);
      navigate("/books");
    }
  };

  useEffect(() => {
    const bookService = new BookService();
    const getBook = async (bookId: string) => {
      const response = await bookService.getBook(bookId);
      setBook(response);
    };

    if (bookId !== undefined) {
      getBook(bookId);
    }
  }, [bookId]);

  return (
    <div>
      <div>
        <button onClick={removeBook}>
          <FiTrash2 />
        </button>
      </div>
      <div>Name: {book?.name}</div>
      <div>Pages: {book?.pages}</div>
    </div>
  );
}

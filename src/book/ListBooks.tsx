import { useEffect, useState } from "react";
import { IBook } from "./Book.interface";
import { BookService } from "./Book.service";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function ListBooks() {
  const [books, setBooks] = useState<IBook[]>([]);
  const navigate = useNavigate();

  const navigateToAddBook = () => {
    navigate("/books/add");
  };

  useEffect(() => {
    const fetchData = async () => {
      const bookService = new BookService();
      const books = await bookService.getBooks();
      setBooks(books);
    };
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={navigateToAddBook}>
        <FiPlus />
      </button>

      <div className="flex flex-wrap gap-4">
        {books.map((book) => (
          <div key={book.id} className="m-1 border-2 p-1">
            <a href={`/books/${book.id}`}>{book.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

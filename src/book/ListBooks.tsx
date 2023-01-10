import { useEffect, useState } from "react";
import { IBook } from "./Book.interface";
import { BookService } from "./book-service";

export function ListBooks() {
  const [books, setBooks] = useState<IBook[]>([]);
  const bookService = new BookService();

  const fetchData = async () => {
    const books = await bookService.getBooks();
    setBooks(books);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="flex flex-wrap gap-4">
      {books.map((book) => (
        <div key={book.id} className="m-1 border-2 p-1">
          <a href={`/books/${book.id}`}>{book.name}</a>
        </div>
      ))}
    </div>
  );
}

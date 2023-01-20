import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookService } from "./Book.service.";

function AddBook() {
  const [bookName, setBookName] = useState("");
  const navigate = useNavigate();
  const bookService = new BookService();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createBookResponse = await bookService.addBook(bookName);
    navigate(`/books/${createBookResponse.id}`);
  };

  return (
    <div>
      <h1 className="text-xl">Add book</h1>
      <form onSubmit={handleSubmit} className="m-4 flex flex-col">
        <label>
          Book name:
          <input
            className="rounded border-2"
            name="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          ></input>
        </label>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBook;

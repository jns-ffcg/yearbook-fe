import axios from "axios";

export class BookService {
  private _url = "https://jns-yearbook.azurewebsites.net/api/book";
  async getBooks() {
    const response = await axios.get(this._url);
    return response.data;
  }

  async getBook(bookId: string) {
    const url = `${this._url}/${bookId}`;
    const response = await axios.get(url);
    return response.data;
  }

  async deleteBook(bookId: string) {
    const url = `${this._url}/${bookId}`;
    const response = await axios.delete(url);
    return response.data;
  }
}

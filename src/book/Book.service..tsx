import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";
import { ICreateItemResponse } from "../common/interfaces/create-item-response.interface";
import { IDefaultResponse } from "../common/interfaces/default-response.interface";
import { IBook, ICreateBookDto } from "./Book.interface";

export class BookService {
  private _url = "https://yearbook-api.azure-api.net/book";
  private _config: AxiosRequestConfig = {
    headers: {
      "Ocp-Apim-Subscription-Key": "a4f2e978b23644578f0edf7f6ec7aeba",
    },
  };
  async getBooks() {
    const response = await axios.get<IBook[]>(this._url, this._config);
    return response.data;
  }

  async getBook(bookId: string) {
    const url = `${this._url}/${bookId}`;
    const response = await axios.get<IBook>(url, this._config);
    return response.data;
  }

  async deleteBook(bookId: string) {
    const url = `${this._url}/${bookId}`;
    const response = await axios.delete<IDefaultResponse>(url, this._config);
    return response.data;
  }

  async addBook(bookName: string) {
    const createBookDto: ICreateBookDto = {
      name: bookName,
    };
    const response = await axios.post<ICreateItemResponse>(
      this._url,
      createBookDto,
      this._config
    );
    return response.data;
  }
}

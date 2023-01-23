import axios, { AxiosRequestConfig } from "axios";
import { ICreateItemResponse } from "../common/interfaces/create-item-response.interface";
import { IDefaultResponse } from "../common/interfaces/default-response.interface";
import { IBook, ICreateBookDto } from "./Book.interface";

export class BookService {
  private _url = `${process.env.REACT_APP_API_URL}/book`;
  private _config: AxiosRequestConfig = {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_SUBSCRIPTION_KEY,
    },
  };
  async getBooks() {
    console.log(this._config);

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

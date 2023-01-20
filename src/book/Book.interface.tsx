export interface IBook {
  id: string;
  name: string;
  pages: number;
}

export interface ICreateBookDto {
  name: string;
}

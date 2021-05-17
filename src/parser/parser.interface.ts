export interface IParser {
  url: string;
  image: string;
  description: string;
  title: string;
  error: IError[];
}

export interface IError {
  path: string;
  message: string;
}

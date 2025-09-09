import { IHttpClient } from "../interfaces/IHttpClient";

export class FetchAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }
}
import { IHttpClient } from '../interfaces/IHttpClient';

export class SimpleHttpClient {
  private adapter: IHttpClient;

  constructor(adapter: IHttpClient) {
    this.adapter = adapter;
  }

  setAdapter(adapter: IHttpClient) {
    this.adapter = adapter;
  }

  get<T>(url: string): Promise<T> {
    return this.adapter.get<T>(url);
  }
}
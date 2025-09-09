import { SimpleHttpClient } from "./clases/SimpleHttpClient";
import { FetchAdapter } from "./clases/FetchAdapter";
import { AxiosAdapter } from "./clases/AxiosAdapater";

export async function runAdapter() {
    console.log("\nPATRÓN ADAPTER: HTTP CLIENT \n");
	const url = "https://jsonplaceholder.typicode.com/posts/1";

	// Usando FetchAdapter
	const fetchClient = new SimpleHttpClient(new FetchAdapter());
	const fetchData = await fetchClient.get(url);
	console.log("FetchAdapter:", fetchData);

	// Usando AxiosAdapter
	const axiosClient = new SimpleHttpClient(new AxiosAdapter());
	const axiosData = await axiosClient.get(url);
	console.log("AxiosAdapter:", axiosData);
}


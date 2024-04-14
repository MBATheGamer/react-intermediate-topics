import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

class APIClient<T> {
  private readonly endpoint: string;

  public constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public getAll = () => {
    return axiosInstance
      .get<T[]>(this.endpoint)
      .then(response => response.data);
  };

  public post = (data: T) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then(response => response.data);
  };
}

export default APIClient;

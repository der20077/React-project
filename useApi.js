import { useCallback, useState } from "react";
import axios from "axios";

const useApi = (baseUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const request = useCallback(
    async (method, endpoint, body = null) => {
      setLoading(true);
      setError(null);
      try {
        const response = await api[method](endpoint, body);
        setData(response.data);
        return response.data;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [api],
  );

  const get = useCallback((endpoint) => request("get", endpoint), [request]);

  const post = useCallback(
    (endpoint, body) => request("post", endpoint, body),
    [request],
  );

  const put = useCallback(
    (endpoint, body) => request("put", endpoint, body),
    [request],
  );

  const remove = useCallback(
    (endpoint) => request("delete", endpoint),
    [request],
  );

  return { data, loading, error, get, post, put, remove };
};

export default useApi;

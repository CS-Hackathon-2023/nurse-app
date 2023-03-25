import { useState, useEffect } from 'react';

export interface TApiResponse {
  status: number
  statusText: string
  data: any
  error: any
  loading: boolean
}

export const useApiGet = (url: string): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async (): Promise<void> => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData().catch((error) => { console.error(error); });
  }, []);

  return { status, statusText, data, error, loading };
};

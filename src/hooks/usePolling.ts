import { useState } from 'react';
import { useApiGet, TApiResponse } from './useApiGet';
import { useInterval } from './useInterval';

export const usePolling = (url: string, pollingInterval: number): TApiResponse | undefined => {
  const [response, setResponse] = useState<TApiResponse>();

  useInterval(() => {
    // Call the useApiGet hook again to fetch updated data
    const res = useApiGet(url);
    setResponse(res);
  }, pollingInterval);

  return response;
};
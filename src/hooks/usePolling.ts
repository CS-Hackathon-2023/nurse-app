import { useState, useEffect } from 'react'
import { type TApiResponse } from './useApiGet'

export const usePolling = (url: string, pollingInterval: number): TApiResponse | undefined => {
  const [response, setResponse] = useState<TApiResponse>();

  useEffect(() => {
    const getAPIData = async (url: string): Promise<void> => {
      const newResponse: TApiResponse = {
        status: 0,
        statusText: '',
        data: null,
        error: null,
        loading: true
      };

      try {
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        newResponse.status = apiResponse.status;
        newResponse.statusText = apiResponse.statusText;
        newResponse.data = json;
      } catch (error) {
        newResponse.error = error;
      }

      newResponse.loading = false;
      setResponse(newResponse);
    };
    const intervalId = setInterval(() => {
      getAPIData(url).catch((error) => { console.error(error); });
    }, pollingInterval);

    return () => { clearInterval(intervalId); };
  }, [url, pollingInterval]);

  return response;
};

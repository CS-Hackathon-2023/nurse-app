import { useState, useEffect } from 'react'
import { type TApiResponse } from './useApiGet'
import { collection, query } from 'firebase/firestore';
import { db } from '../firebase';

export const usePolling = (url: string, pollingInterval: number): TApiResponse | undefined => {
  const [response, setResponse] = useState<TApiResponse>();
  const RequestsRef = collection(db, 'Requests');

  useEffect(() => {
    const getAPIData = async (url: string): Promise<void> => {
      const newResponse: TApiResponse = {
        status: 0,
        statusText: '',
        data: null,
        error: null,
        loading: true
      };

      // try {
      //   const apiResponse = await fetch(url);
      //   const json = await apiResponse.json();
      //   newResponse.status = apiResponse.status;
      //   newResponse.statusText = apiResponse.statusText;
      //   newResponse.data = json;
      // } catch (error) {
      //   newResponse.error = error;
      // }
      try {
        const q = whereClause.length > 0
          ? query(collection(db, collectionName), ...whereClause)
          : collection(db, collectionName);
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        newResponse.data = data;
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

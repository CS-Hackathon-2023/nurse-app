import { useState, useEffect } from 'react';
import { type TApiResponse } from './useApiGet';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
// query, where

export const usePolling = (url: string, pollingInterval: number): TApiResponse | undefined => {
  const [response, setResponse] = useState<TApiResponse>();
  // const requestRef = collection(db, 'requets');

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
        // const q = db.collectionGroup().get();
        const querySnapshot = await getDocs(collection(db, 'Requests'));
        console.log('querySnapshot');
        console.log(querySnapshot);
        // const snapshot = await getDocs(q);
        const snapshot = querySnapshot;
        console.log('snapshot');
        console.log(snapshot);
        console.log(`Length of snapshot: ${snapshot.docs.length}`)
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        newResponse.data = data;
      } catch (error) {
        newResponse.error = error;
        console.log('error');
        console.log(error);
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

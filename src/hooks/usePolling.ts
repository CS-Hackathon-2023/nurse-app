import { useState, useEffect } from 'react';
import { type TApiResponse } from './useApiGet';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { type IRequest, type IUser, type ICard } from '../Types/Request.types';
// query, where

export const usePolling = (ward: string, pollingInterval: number): TApiResponse | undefined => {
  const [response, setResponse] = useState<TApiResponse>();
  const requestRef = collection(db, 'Requests');
  const userRef = collection(db, 'Users');

  useEffect(() => {
    const getRequestsByWard = async (ward: string): Promise<void> => {
      const newResponse: TApiResponse = {
        status: 0,
        statusText: '',
        data: null,
        error: null,
        loading: true
      };

      try {
        const getReuqestQuery = query(requestRef, where('ward', '==', ward));
        const requestDocs = await getDocs(getReuqestQuery);
        console.log('requestDocs');
        console.log(requestDocs);
        console.log(`requestDocs.docs length: ${requestDocs.docs.length}`);
        const requestPromises = requestDocs.docs.map(async (requestDoc) => {
          const request = requestDoc.data() as IRequest;
          const getUserQuery = query(userRef, where('userId', '==', request.userId));
          const userDocs = await getDocs(getUserQuery);
          const user = userDocs.docs[0].data() as IUser;
          const sevirity = request?.severity ?? 'High';
          return {
            requestId: request.requestId,
            userId: request.userId,
            name: user.name,
            age: user.age,
            clientId: user.clientId,
            ward: user.ward,
            room: user.room,
            requestType: request.requestType,
            requestDetail: request.requestDetail,
            status: request.status,
            severity: sevirity
          };
        });
        const cards: ICard[] = await Promise.all(requestPromises);
        newResponse.data = cards;
      } catch (error) {
        newResponse.error = error;
        console.log('error');
        console.log(error);
      }

      newResponse.loading = false;
      setResponse(newResponse);
    };
    const intervalId = setInterval(() => {
      getRequestsByWard(ward).catch((error) => { console.error(error); });
    }, pollingInterval);

    return () => { clearInterval(intervalId); };
  }, [ward, pollingInterval]);

  return response;
};

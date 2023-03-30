/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import RequestsTable from './Components/Table/Table.component';
import { usePolling } from '../../hooks/usePolling';
import { type Request } from '../../Types/Request';

// const requestsData: Request[] = [
//   {
//     requestId: 'ID',
//     userId: 'UserID1',
//     departure: '807',
//     requestType: 'Type 1',
//     requestDetail: 'Detail1',
//     status: 'In Progress',
//     room: 'Room 1'
//   }
// ];

export const NursePage = (): JSX.Element => {
  const [requests, setRequests] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const pollingInterval = 10000; // 15 seconds in milliseconds
  const response = usePolling(url, pollingInterval);

  useEffect(() => {
    if (response?.data) {
      setRequests(response.data);
    }
  }, [response]);
  if (response == null) {
    return <p>Loading...</p>;
  }
  return (
        <div>
            <RequestsTable requests={requests} />
        </div>
  );
};

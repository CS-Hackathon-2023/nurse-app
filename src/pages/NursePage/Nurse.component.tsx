/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
// import { usePolling } from '../../hooks/usePolling';
// import { type Request } from '../../Types/Request';
import { RequestsCardContainer } from './Components/RequestsCardContainer/RequestsCardContainer.component';

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

const mockRequests = [
  {
    requestId: 'ID',
    userId: 'UserID1',
    name: 'John Doe',
    age: 20,
    clientId: '12345',
    ward: 'Nurse',
    room: '817',
    requestType: 'Type 1',
    requestDetail: 'Detail1',
    status: 'In Progress',
    severity: 'High'
  },
  {
    requestId: 'ID',
    userId: 'UserID1',
    name: 'John Doe',
    age: 20,
    clientId: '12345',
    ward: 'Nurse',
    room: '817',
    requestType: 'Type 1',
    requestDetail: 'Detail1',
    status: 'In Progress',
    severity: 'High'
  },
  {
    requestId: 'ID',
    userId: 'UserID1',
    name: 'John Doe',
    age: 20,
    clientId: '12345',
    ward: 'Nurse',
    room: '817',
    requestType: 'Type 1',
    requestDetail: 'Detail1',
    status: 'In Progress',
    severity: 'High'
  },
  {
    requestId: 'ID',
    userId: 'UserID1',
    name: 'John Doe',
    age: 20,
    clientId: '12345',
    ward: 'Nurse',
    room: '817',
    requestType: 'Type 1',
    requestDetail: 'Detail1',
    status: 'In Progress',
    severity: 'High'
  },
  {
    requestId: 'ID',
    userId: 'UserID1',
    name: 'John Doe',
    age: 20,
    clientId: '12345',
    ward: 'Nurse',
    room: '817',
    requestType: 'Type 1',
    requestDetail: 'Detail1',
    status: 'In Progress',
    severity: 'High'
  }
]
export const NursePage = (): JSX.Element => {
  // const [requests, setRequests] = useState([]);
  // const url = 'https://jsonplaceholder.typicode.com/todos/1';
  // const pollingInterval = 10000; // 15 seconds in milliseconds
  // const response = usePolling(url, pollingInterval);

  // useEffect(() => {
  //   if (response?.data) {
  //     setRequests(response.data);
  //   }
  // }, [response]);
  // if (response == null) {
  //   return <p>Loading...</p>;
  // }
  return (
        <div>
            <RequestsCardContainer requests={ mockRequests } />
        </div>
  );
};

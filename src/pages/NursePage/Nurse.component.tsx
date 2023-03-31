/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { usePolling } from '../../hooks/usePolling';
// import { type Request } from '../../Types/Request';
import { RequestsCardContainer } from './Components/RequestsCardContainer/RequestsCardContainer.component';

interface IRequest {
  requestId: string
  userId: string
  requestType: string
  requestDetail: string
  status: string
  severity: string
}

interface IUser {
  userId: string
  name: string
  age: number
  clientId: string
  room: string
  ward: string
}

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
  const [requests, setRequests] = useState([]);
  const pollingInterval = 15000; // 15 seconds in milliseconds
  const response = usePolling('madHouse', pollingInterval);

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
            <RequestsCardContainer requests={ requests } />
        </div>
  );
};

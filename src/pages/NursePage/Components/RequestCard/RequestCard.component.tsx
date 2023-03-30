import React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import HelpTypeIcon from '../../../../assets/requestTypes/Help.svg';

export interface ICard {
  requestId: string
  userId: string
  name: string
  age: number
  clientId: string
  ward: string
  room: string
  requestType: string
  requestDetail: string
  status: string
  severity: string
}

// const request: ICard = {
//   requestId: 'ID',
//   userId: 'UserID1',
//   name: 'John Doe',
//   age: 20,
//   clientId: '12345',
//   ward: 'Nurse',
//   room: '817',
//   requestType: 'Type 1',
//   requestDetail: 'Detail1',
//   status: 'In Progress',
//   severity: 'High'
// };

export const RequestCard = (props: { request: ICard }): JSX.Element => {
  const { request } = props;
  return (
    <Card sx={{ minWidth: 275, color: 'white', bgcolor: '#3B83B8' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1 }}>
          Room {request.room}
        </Typography>
        <Divider />
        <Typography variant="body2" sx={{ mb: 1 }}>
          Name: {request.name}
          <br />
          Age: {request.age}
          <br />
          Id: {request.clientId}
        </Typography>
        <Divider />
        <Typography variant="body2" sx={{ mb: 1 }}>
          Request Type: {request.requestType}
          <img src={HelpTypeIcon} />
        </Typography>
        <Divider />
        <Typography variant="body2" sx={{ mb: 1 }}>
          Request Detail: {request.requestDetail}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'white', bgcolor: '#5AAFEB', mb: 1 }}>Mark as Done</Button>
      </CardActions>
    </Card>
  );
};

import React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import HelpTypeIcon from '../../../../assets/requestTypes/Help.svg';
import NurseIcon from '../../../../assets/requestTypes/Nurse.svg';
import SOSIcon from '../../../../assets/requestTypes/SOS.svg';
import Handicap from '../../../../assets/requestTypes/Handicap.svg';

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

const getIcon = (requestType: string): string => {
  switch (requestType) {
    case 'callLogistics':
      return HelpTypeIcon;
    case 'wheelHelp':
      return Handicap;
    case 'callSos':
      return SOSIcon;
    case 'callNurse':
      return NurseIcon;
    default:
      return HelpTypeIcon;
  }
};

const getBgColor = (requestType: string): string => {
  switch (requestType) {
    case 'callSos':
      return '#FF6F61';
    default:
      return '#3B83B8';
  }
};

export const RequestCard = (props: { request: ICard }): JSX.Element => {
  const { request } = props;
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275, color: 'white', bgcolor: getBgColor(request.requestType) }}>
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
          <img src={getIcon(request.requestType)} />
          <br/>
          Request Type: {request.requestType}
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

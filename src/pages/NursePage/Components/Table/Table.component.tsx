import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { type Request } from '../../../../Types/Request';
import { Button } from '@mui/material';

const RequestsTable = (props: { requests: Request[] }): JSX.Element => {
  const { requests } = props;
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="requests table">
      <TableHead>
        <TableRow>
          <TableCell>Request</TableCell>
          <TableCell align="right">User ID</TableCell>
          <TableCell align="right">Request Type</TableCell>
          <TableCell align="right">Request Detail</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Complete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {requests.map((request) => (
          <TableRow
            key={request.requestId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {request.requestId}
            </TableCell>
            <TableCell align="right">{request.userId}</TableCell>
            <TableCell align="right">{request.requestType}</TableCell>
            <TableCell align="right">{request.requestDetail}</TableCell>
            <TableCell align="right">{request.status}</TableCell>
            <TableCell align="right"><Button>Complete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default RequestsTable;

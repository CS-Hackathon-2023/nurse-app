import React from 'react';
import Grid from '@mui/material/Grid';
import { RequestCard, type ICard } from '../RequestCard/RequestCard.component';

interface CardContainerProps {
  requests: ICard[]
}

export const RequestsCardContainer = (props: CardContainerProps): JSX.Element => {
  const { requests } = props;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {requests.map((request) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={request.requestId} sx={{ marginBottom: 2 }}>
          <RequestCard request={request} />
        </Grid>
      ))}
    </div>
  );
};

import React from 'react';
import { makeStyles, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '90px', // adjust the top margin to match Metamask
    maxWidth: '1300px', // adjust the maximum width to match Metamask
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.5rem', // adjust the font size to match Metamask
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
}));

const TransactionHistory = () => {
  return (
    <div>
      <Typography variant="h4">Transaction History</Typography>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="transaction history table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>2022-05-01 12:00:00</TableCell>
              <TableCell>Send</TableCell>
              <TableCell>0.5 ETH</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2022-05-01 12:00:00</TableCell>
              <TableCell>Receive</TableCell>
              <TableCell>0.25 ETH</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2022-04-30 14:30:00</TableCell>
              <TableCell>Send</TableCell>
              <TableCell>1 ETH</TableCell>
              <TableCell>Failed</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionHistory;
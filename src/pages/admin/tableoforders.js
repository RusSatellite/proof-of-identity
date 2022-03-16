import { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableOfOrders({filterValue}) {
  const [rows, setRows] = useState([]);
  const [filterRows, setFilterRows] = useState([]);
  useEffect(() => {
    axios.get('https://humanincome.org/api/mainnet/get-orders')
    .then(res => {
      if (res.data.success === true) {
        setRows(res.data.data);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
  }, [])
  useEffect(() => {
    setFilterRows(rows.filter((data) => {
      if (filterValue === '') {
        return true;
      } else {
        return data.no.toString().toLowerCase().includes(filterValue.toLowerCase()) || 
          data.signature.toString().toLowerCase().includes(filterValue.toLowerCase()) || 
          data.type.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
          data.date.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
          data.currency.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
          data.amount.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
          data.tx.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
          data.associated_nodes.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
          data.participation.toString().toLowerCase().includes(filterValue.toLowerCase());
      }
    }))
  }, [filterValue, rows]);
  return (
    <TableContainer component={Paper}>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
        style={{textAlign: 'center'}}
      >
        Table of Orders
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order no.</StyledTableCell>
            <StyledTableCell align="right">signature</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Currency</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Tx</StyledTableCell>
            <StyledTableCell align="right">Associated Nodes</StyledTableCell>
            <StyledTableCell align="right">Participation of the node</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterRows.map((row, key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell align="right">{row.signature}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.currency}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.tx}</StyledTableCell>
              <StyledTableCell align="right">{row.associated_nodes}</StyledTableCell>
              <StyledTableCell align="right">{row.participation}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

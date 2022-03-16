import React, { useState, useEffect } from "react";
import axios from 'axios'
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


export default function TableOfWallets({filterValue}) {
  const [rows, setRows] = useState([]);
  const [filterRows, setFilterRows] = useState([]);
  const filter_data = (data) => {
    if (data === null) {
      return false;
    }
    return data.toString().toLowerCase().includes(filterValue.toLowerCase());
  }
  useEffect(() => {
    axios.get('https://humanincome.org/api/mainnet/get-wallets')
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
        return filter_data(data.id) || 
            filter_data(data.amount) || 
            filter_data(data.associated_node) ||
            filter_data(data.date_of_start) || 
            filter_data(data.signature) ||
            filter_data(data.id_file);
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
        Table of Wallets
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Wallet</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Associated node</StyledTableCell>
            <StyledTableCell align="right">Date of start</StyledTableCell>
            <StyledTableCell align="right">Signature</StyledTableCell>
            <StyledTableCell align="right">Identification file</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterRows.map((row,key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.associated_node}</StyledTableCell>
              <StyledTableCell align="right">{row.date_of_start}</StyledTableCell>
              <StyledTableCell align="right">{row.signature}</StyledTableCell>
              <StyledTableCell align="right">{row.id_file}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

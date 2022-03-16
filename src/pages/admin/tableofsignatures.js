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


export default function TableOfSignatures({filterValue}) {
  const [rows, setRows] = useState([]);
  const [filterRows, setFilterRows] = useState([]);
  useEffect(() => {
    axios.get('https://humanincome.org/api/mainnet/get-signatures')
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
        return data.signature.toString().toLowerCase().includes(filterValue.toLowerCase()) || 
          data.payment_id.toString().toLowerCase().includes(filterValue.toLowerCase()) || 
          data.id_file.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
          data.associated_node.toString().toLowerCase().includes(filterValue.toLowerCase());
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
        Table of Signatures
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Signature</StyledTableCell>
            <StyledTableCell align="right">Payment ID</StyledTableCell>
            <StyledTableCell align="right">ID File</StyledTableCell>
            <StyledTableCell align="right">Associated Node</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterRows.map((row, key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {row.signature}
              </StyledTableCell>
              <StyledTableCell align="right">{row.payment_id}</StyledTableCell>
              <StyledTableCell align="right">{row.id_file}</StyledTableCell>
              <StyledTableCell align="right">{row.associated_node}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

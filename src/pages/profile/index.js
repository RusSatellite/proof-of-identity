import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
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

const Profile = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] =  useState(0);
  const [myData, setMyData] = useState([]);
  
  useEffect(()=>{
    let myInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval();
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  });

  useEffect(()=>{
    axios.get('https://humanincome.org/api/mainnet/get-remaining-time')
    .then(res => {
      if (res.data.success === true) {
        const leftSeconds = res.data.data / 1000;
        setHours(Math.floor(leftSeconds / (60 * 60)));
        setMinutes(Math.floor((leftSeconds % (60 * 60)) / 60));
        setSeconds(Math.floor(leftSeconds % 60));
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
    axios.get('https://humanincome.org/api/mainnet/get-wallet/1234567890abcdefghijklmnopqrstuvwxyz')
    .then(res => {
      if (res.data.success === true) {
        setMyData(res.data.data);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
  }, []);

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center container">
        <div style={{marginTop: "-5", alignSelf: "flex-end", display: "flex", marginRight: "5%"}}>
          { hours === 0 && minutes === 0 && seconds === 0
            ? null
            : <h1> {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ?  `0${seconds}` : seconds}</h1> 
          }
        </div>
        <TableContainer component={Paper}>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
            style={{textAlign: 'center'}}
          >
            My Profile
          </Typography>
          { myData.length !== 0 && 
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableBody>
              <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    ID
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['_id']}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Signature
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['signature']}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Balance
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['balance']}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    ID File
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['id_file']}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Wallet Status
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['wallet_status']}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    ID Rating
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['id_rating']}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Newsletter Email
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['newsletter_email']}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Created At
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['createdAt']}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    UpdatedAt
                  </StyledTableCell>
                  <StyledTableCell align="right">{myData['updatedAt']}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          }
        </TableContainer>
      </div>
    </div>
  );
};

export default Profile;
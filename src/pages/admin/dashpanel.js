import { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


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

export default function DashPanel() {
  const [editable, setEditable] = useState(false);
  const [daily_minting_to_be_updated, set_daily_minting_to_be_updated] = useState('-');
  const [nodes_reward_to_be_updated, set_nodes_reward_to_be_updated] = useState('-');
  const [numberOfParticipants, setNumberOfParticipants] = useState('-');
  const [numberOfNodes, setNumberOfNodes] = useState('-');
  const [numberOfBlocks, setNumberOfBlocks] = useState('-');
  const [max_circ_supply, set_max_circ_supply] = useState('-');
  const [circ_supply, set_circ_supply] = useState('-');
  const [daily_minting, set_daily_minting] = useState('-');
  const [nodes_reward, set_nodes_reward] = useState('-');

  useEffect(() => {
    axios.get('https://humanincome.org/api/mainnet/wallet-count')
    .then(res => {
      if (res.data.success === true) {
        setNumberOfParticipants(res.data.data);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
    axios.get('https://humanincome.org/api/mainnet/node-count')
    .then(res => {
      if (res.data.success === true) {
        setNumberOfNodes(res.data.data);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
    axios.get('https://humanincome.org/api/mainnet/block-count')
    .then(res => {
      if (res.data.success === true) {
        setNumberOfBlocks(res.data.data);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
    axios.get('https://humanincome.org/api/mainnet/get-tokenomics')
    .then(res => {
      if (res.data.success === true) {
        set_max_circ_supply(res.data.data.max_circ_supply);
        set_circ_supply(res.data.data.circ_supply);
        set_daily_minting(res.data.data.daily_minting);
        set_nodes_reward(res.data.data.nodes_reward);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
  }, [])
  const handleButtonEdit = () => {
    setEditable(true);
  }
  const handleButtonSave = () => {
    const prices = { daily_minting: daily_minting_to_be_updated, nodes_reward: nodes_reward_to_be_updated };
    axios.put('https://humanincome.org/api/mainnet/update-tokenomics', prices)
    .then(res => {
      if (res.data.success) {
        set_daily_minting(res.data.data.daily_minting);
        set_nodes_reward(res.data.data.nodes_reward);
      }
      setEditable(false);      
    });
  }
  const handleButtonCancel = () => {
    setEditable(false);
  }
  return (
    <TableContainer component={Paper}>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
        style={{textAlign: 'center'}}
      >
        Dash Panel
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">Daily Minting</StyledTableCell>
            <StyledTableCell align="right">{editable ? <input className='editable' onChange={(e) => set_daily_minting_to_be_updated(e.target.value)}/> : daily_minting}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">Node reward/signature</StyledTableCell>
            <StyledTableCell align="right">{editable ? <input className='editable' onChange={(e) => set_nodes_reward_to_be_updated(e.target.value)}/> : nodes_reward}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">Max circulation</StyledTableCell>
            <StyledTableCell align="right">{max_circ_supply}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">Circulating supply</StyledTableCell>
            <StyledTableCell align="right">{circ_supply}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">No. of node</StyledTableCell>
            <StyledTableCell align="right">{numberOfNodes}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">No. of signature</StyledTableCell>
            <StyledTableCell align="right">{numberOfParticipants}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">Number of blocks</StyledTableCell>
            <StyledTableCell align="right">{numberOfBlocks}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
      <div className='editButton'>
        {editable && <Button onClick={handleButtonSave}>SAVE</Button>}
        {editable && <Button onClick={handleButtonCancel}>CANCEL</Button>}
        {!editable && <Button onClick={handleButtonEdit}>EDIT</Button>}
      </div>
    </TableContainer>
  );
}

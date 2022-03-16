import { useState } from 'react';
import TextField from "@mui/material/TextField";
import DashPanel from './dashpanel';
import TableOfOrders from './tableoforders';
import TableOfSignatures from './tableofsignatures';
import TableOfWallets from './tableofwallets';
import './admin.css';

const Dashboard = () => {
  const [activeID, setActiveID] = useState(0);
  const [filterValue, setFilterValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setFilterValue(e.target.value);
  }

  return (
    <div className="container">
      <div className="search">
        <TextField
          fullWidth
          label="Search"
          onChange={handleSearch}
        />
      </div>
      <div className="dashboard">
        <div className="navbar">
          <button className={activeID === 0 ? 'active_button' : ''} onClick={() => setActiveID(0)}>Dash Panel</button>
          <button className={activeID === 1 ? 'active_button' : ''} onClick={() => setActiveID(1)}>Table of Signatures</button>
          <button className={activeID === 2 ? 'active_button' : ''} onClick={() => setActiveID(2)}>Table of Orders</button>
          <button className={activeID === 3 ? 'active_button' : ''} onClick={() => setActiveID(3)}>Table of Wallets</button>
        </div>
        <div className="tablebar">
          {activeID === 0 && <DashPanel/>}
          {activeID === 1 && <TableOfSignatures filterValue={filterValue} />}
          {activeID === 2 && <TableOfOrders filterValue={filterValue} />}
          {activeID === 3 && <TableOfWallets filterValue={filterValue} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
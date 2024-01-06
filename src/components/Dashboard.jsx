import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Dashboard = ({ missionData }) => {
  const gridOptions = {
    columnDefs: [
      { headerName: 'Mission', field: 'mission' },
      { headerName: 'Company', field: 'company' },
      { headerName: 'Location', field: 'location' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Time', field: 'time' },
      { headerName: 'Rocket', field: 'rocket' },
      { headerName: 'Price', field: 'price' },
      { headerName: 'Outcome', field: 'successful' },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
    },
    rowData: missionData,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
      <h2>Dashboard</h2>
      <AgGridReact {...gridOptions} />
    </div>
  );
};

export default Dashboard;

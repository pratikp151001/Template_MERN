import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { json } from 'react-router-dom';


export default function Page2() {

  //usestates
  const [selectedRowIds, setSelectedRowIds] = useState([]);


  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      // width: 130,
      flex: 1,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      // width: 130,
      flex: 1,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      //  width: 130,
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      // type: 'number',
      align: 'center',
      headerAlign: 'center',
      // editable: true,
      // width: 130,
      flex: 1,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      // width: 130,
      flex: 1,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: '',
      headerName: 'Actions',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      // width: 130,
      flex: 1,
      renderCell: ({ row }) =>
        <Button
        variant='contained'
          // value={row.id}
          onClick={() => ActionFunction(row.id)}
        >
          Action
        </Button>,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  //Action Click Function
  const ActionFunction = (id) => {
    console.log("🚀 ~ file: Page2.jsx:73 ~ ActionFunction ~ id:", id)

  }

  return (
    <div className="container">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          onRowSelectionModelChange={ids => setSelectedRowIds(ids)}
        />
      </div>
      {JSON.stringify(selectedRowIds)}
    </div>
  )
}

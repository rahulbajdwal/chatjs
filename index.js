import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button"
import { Bar } from "react-chartjs-2";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DataGrid} from '@mui/x-data-grid';
import "./styles.css";

const Stock1 = {
  labels: ["Red", "Blue","test","rahul","harsh","hars","gaurav"],
  datasets: [
    {
      label: "Success Count",
      stack: "Stack 0",
      data: [12, 19,20,7,3,8,14,],
      backgroundColor: "blue"
    }
  ]
}

const Stock2 = {
  labels: ["Red", "Blue","test","rahul","harsh","hars","gaurav"],
  datasets: [
    {
      label: "Success Count",
      stack: "Stack 0",
      data: [12, 14,6,9,3,8,14,],
      backgroundColor: "green"
    }
    //,
    //{
     // label: "Failure Count",
     // stack: "Stack 0",
     // data: [6, 2,20,7,3,8,14,],
      //backgroundColor: "red"
    //}
  ]
}

const stock3 = {
  labels: ["Red", "Blue","test","rahul","harsh","hars","gaurav"],
  datasets: [
    {
      label: "Success Count",
      stack: "Stack 0",
      data: [12, 15,20,7,9,8,14,],
      backgroundColor: "red"
    }
    // ,
    // {
    //   label: "Failure Count",
    //   stack: "Stack 0",
    //   data: [6, 2],
    //   backgroundColor: "red"
    // }
  ]
}
const columns  = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 50 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const options = {
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};



function App() {
  const [stock,setStock]= useState()
  const [slide,setSlide]= useState(false)

const handleChange = (event) => {
 
  setStock(event.target.value)
};
console.log(stock,"stocks")

const handletable=(()=>{
  setSlide(true)
})

const handleGraph =(()=>{
  setSlide(false)
})

  return (
    <div className="App">
      <h1>Comely Enterprises Task done by rahul</h1>
      <Box sx={{ml:20,mr:20}} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Stocks</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        
          label="Stock"
          onChange={handleChange}
        >
          <MenuItem value={Stock1}>Stock1</MenuItem>
          <MenuItem value={Stock2}>Stock2</MenuItem>
          <MenuItem value={stock3}>Stock3</MenuItem>
        </Select>


{slide===false ?(<Button variant="contained"  onClick={handletable} >Table</Button>):(<Button variant="contained"  onClick={handleGraph} >Graphs</Button>)}
        

 

      </FormControl>

      {slide ===false ?(<Bar data={stock} options={options} />):(  <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>   )}
      
 
   
    </Box>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
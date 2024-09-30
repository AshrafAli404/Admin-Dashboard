import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { useTheme,Typography } from '@mui/material';  
import Box from '@mui/material/Box';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from '../Components/Header'


export default function Team() {
  const theme = useTheme();
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 33, align: "center", headerAlign: "center" },
    { field: 'name', headerName: 'Name', align: "center", headerAlign: "center" },
    { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center" },
    { field: 'age', headerName: 'Age', align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'Phone', flex: 1, align: "center", headerAlign: "center" },
    { field: 'access', headerName: 'Access', flex: 1, align: "center", headerAlign: "center",
      renderCell: ({row: {access}}) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              backgroundColor:
              access === "Admin"
             ? theme.palette.primary.dark
             : access === "Manager"
             ? theme.palette.secondary.dark
             : "#3da58a"
            }}
          >
            {access === "Admin" &&  (<AdminPanelSettingsOutlined sx={{ color: "#fff"}} fontSize="small" />)}
            {access === "Manager" &&  (<LockOpenOutlined sx={{ color: "#fff"}} fontSize="small" />)}
            {access === "User" &&  (<SecurityOutlined sx={{ color: "#fff"}} fontSize="small" />)}
            <Typography sx={{fontSize: "13px", color: "#fff"}}>
              {access}
            </Typography>
          </Box>
        )
      }
    },
  ];
  
  return (
    <Box sx={{ height: 600, width: '98%', mx:"auto" }}>

     <Header title={'TEAM'} subTitle={"Managing the Team Members"}/>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          '& .MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          '& .MuiDataGrid-columnHeader': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}
      />
   
   
    </Box>
  );
}

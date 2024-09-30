import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { rows, columns } from './data';  // تأكد من استيراد الأعمدة بشكل صحيح
import Header from '../Components/Header';

const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>
        <Header title={'CONTACTS'} subTitle={"List of Contacta for Future Reference"}/>
      <DataGrid 
      slots={{
        toolbar:GridToolbar,
      }}
        rows={rows}
        columns={columns}

      />
    </Box>
  );
};

export default Contacts;

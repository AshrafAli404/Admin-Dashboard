import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Card from './Card'
import { EmailOutlined } from '@mui/icons-material'
import { PointOfSaleOutlined } from '@mui/icons-material'
import { PersonAddAlt1Outlined } from '@mui/icons-material'
import { TrafficOutlined } from '@mui/icons-material'
import { data1, data2, data3, data4 } from './data'

export default function Row1() {
   const theme = useTheme() 
  return ( 
   <Stack direction={'row'} flexWrap={"wrap"} gap={1} justifyContent={{xs: "center",sm: "space-between"}}>
  
    <Card icon={<EmailOutlined sx={{fontSize:"23px",color:theme.palette.secondary.main}}/>}
     title={"12,361"}
     subTitle={"Emails Sent"}
     chart={undefined}
     increase={"+14"}
     data={data1}
     scheme={'nivo'}/>
    
   
    <Card icon={<PointOfSaleOutlined sx={{fontSize:"23px",color:theme.palette.secondary.main}}/>}
         title={"413,225"}
         subTitle={"Sales obtained"}
         chart={undefined}
         increase={"+21"}
         data={data2}
         scheme={'category10'}/>
    
    <Card icon={<PersonAddAlt1Outlined sx={{fontSize:"23px",color:theme.palette.secondary.main}}/>}
         title={"32,441"}
         subTitle={"New Clients"}
         chart={undefined}
         increase={"+5"}
         data={data3}
         scheme={'accent'}/>
    
    <Card icon={<TrafficOutlined sx={{fontSize:"23px",color:theme.palette.secondary.main}}/>}
         title={"1,325,134"}
         subTitle={"Traffic Received"}
         chart={undefined}
         increase={"+43"}
         data={data4}
         scheme={'dark2'}/>
 
   </Stack>
  )
}

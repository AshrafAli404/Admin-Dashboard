import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function Header({title,subTitle,isDashboard=false}) {
    const theme = useTheme()
  return (
    <Box mb={isDashboard? 2 : 4}>
    <Typography
     sx={{color:theme.palette.info.light,
      fontWeight:'bold'}}
       variant='h5'>
        {title}
        </Typography>{subTitle}
    <Typography variant='body1'> </Typography>
  </Box>
  )
}

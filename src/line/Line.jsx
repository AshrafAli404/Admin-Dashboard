import React from 'react'
import { useTheme } from '@mui/material';
import LineChart from './LineChart';



export default function Line() {
  const theme = useTheme()
  return (
   <LineChart/>
  )
}

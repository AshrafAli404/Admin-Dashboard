import React from 'react'
import { useTheme } from '@mui/material';
import BarChart from './BarChart';



export default function Bar() {
  const theme = useTheme()
  return (
  <BarChart/>
  )
}

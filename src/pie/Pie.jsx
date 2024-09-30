import React from 'react'
import { useTheme } from '@mui/material';
import PieChart from './PieChart';

 

export default function Pie() {
  const theme = useTheme()
  return (
    <PieChart/>
  )
}

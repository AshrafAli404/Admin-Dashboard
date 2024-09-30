import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
// import Header from '../Components/Header';

const data = [
  {
    id: 'React',
    label: 'React',
    value: 272,
    color: 'hsl(107, 70%, 50%)',
  },
  {
    id: 'stylus',
    label: 'Stylus',
    value: 542,
    color: 'hsl(64, 70%, 50%)',
  },
  {
    id: 'sass',
    label: 'Sass',
    value: 401,
    color: 'hsl(41, 70%, 50%)',
  },
  {
    id: 'hackell',
    label: 'Hackell',
    value: 424,
    color: 'hsl(172, 70%, 50%)',
  },
  {
    id: 'nue',
    label: 'Nue',
    value: 333,
    color: 'hsl(219, 70%, 50%)',
  },
];

export default function PieChart({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? '220px' : '75vh' }}>
    {/* <Header title={'Pie Chart'} subTitle={"Simple Pie Chart"}/> */}
      
      <ResponsivePie
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
          },
          // You can add more theming options here if needed
        }}
        margin={isDashboard ? { top: 10, right: 0, bottom: 10, left: 0 } : { top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={isDashboard ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        enableArcLabels={!isDashboard}
        enableArcLinkLabels={!isDashboard}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: theme.palette.text.primary,
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
}





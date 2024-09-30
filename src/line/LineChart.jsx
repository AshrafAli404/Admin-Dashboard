import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
// import Header from '../Components/Header';

const data =
[
  {
    "id": "france",
    "color": "hsl(326, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 284
      },
      {
        "x": "helicopter",
        "y": 50
      },
      {
        "x": "boat",
        "y": 47
      },
      {
        "x": "train",
        "y": 38
      },
      {
        "x": "subway",
        "y": 34
      },
      {
        "x": "bus",
        "y": 185
      },
      {
        "x": "car",
        "y": 298
      },
      {
        "x": "moto",
        "y": 73
      },
      {
        "x": "bicycle",
        "y": 182
      },
      {
        "x": "horse",
        "y": 221
      },
      {
        "x": "skateboard",
        "y": 89
      },
      {
        "x": "others",
        "y": 87
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(288, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 262
      },
      {
        "x": "helicopter",
        "y": 30
      },
      {
        "x": "boat",
        "y": 285
      },
      {
        "x": "train",
        "y": 49
      },
      {
        "x": "subway",
        "y": 84
      },
      {
        "x": "bus",
        "y": 24
      },
      {
        "x": "car",
        "y": 266
      },
      {
        "x": "moto",
        "y": 108
      },
      {
        "x": "bicycle",
        "y": 43
      },
      {
        "x": "horse",
        "y": 78
      },
      {
        "x": "skateboard",
        "y": 291
      },
      {
        "x": "others",
        "y": 61
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(225, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 186
      },
      {
        "x": "helicopter",
        "y": 176
      },
      {
        "x": "boat",
        "y": 154
      },
      {
        "x": "train",
        "y": 186
      },
      {
        "x": "subway",
        "y": 279
      },
      {
        "x": "bus",
        "y": 17
      },
      {
        "x": "car",
        "y": 264
      },
      {
        "x": "moto",
        "y": 83
      },
      {
        "x": "bicycle",
        "y": 66
      },
      {
        "x": "horse",
        "y": 106
      },
      {
        "x": "skateboard",
        "y": 257
      },
      {
        "x": "others",
        "y": 163
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(307, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 94
      },
      {
        "x": "helicopter",
        "y": 51
      },
      {
        "x": "boat",
        "y": 138
      },
      {
        "x": "train",
        "y": 224
      },
      {
        "x": "subway",
        "y": 255
      },
      {
        "x": "bus",
        "y": 248
      },
      {
        "x": "car",
        "y": 45
      },
      {
        "x": "moto",
        "y": 52
      },
      {
        "x": "bicycle",
        "y": 188
      },
      {
        "x": "horse",
        "y": 260
      },
      {
        "x": "skateboard",
        "y": 12
      },
      {
        "x": "others",
        "y": 250
      }
    ]
  }
]

export default function LineChart({isDashboard=false}) {
    const theme = useTheme()
  return (
    <Box sx={{height: isDashboard? "280px" : "75vh"}}>
    {/* <Header title={'Line Chart'} subTitle={"Simple Line Chart"}/> */}
    
    <ResponsiveLine
      data={data}
      curve='catmullRom'
      theme={{

        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "axis": {
            "domain": {
                "line": {
                    "stroke": theme.palette.divider,
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill":theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "ticks": {
                "line": {
                    "stroke":  theme.palette.divider,
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "grid": {
            "line": {
                "stroke":  theme.palette.divider,
                "strokeWidth": 0
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": theme.palette.text.secondary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": theme.palette.text.primary,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            }
        },
        "tooltip": {
            "wrapper": {},
            "container": {
                "background": theme.palette.background.default,
                "color": theme.palette.text.primary,
                "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
        }
    }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard? null : 'transporation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard? null : 'count',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
  />
  </Box>
  )
}

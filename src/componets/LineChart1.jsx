import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';





const data = [

    {
      name: '6/30/2024 - 7/6/2024',
      orders: 1600,
      sales: 1400,
      
    },
    {
      name: '7/7/2024 - 7/13/2024',
      orders: 800,
      sales: 800,
     
    },
    {
      name: '7/21/2024 - 7/27/2024',
      orders: 800,
      sales: 500,
     
    },
    
  ];

const LineChart1 = () => {
  return (
    <>
    <h2 className='heading1'>Sales vs Orders</h2>
    <div>
      
        <LineChart
          width={850}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign='top' />
          <Line type="monotone" dataKey="orders" stroke="#8884d8" activeDot={{ r: 10 }} />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" activeDot={{ r: 10 }}/>
        </LineChart>

    </div>
    </>
  )
}

export default LineChart1
import React from 'react';
import { PieChart, Pie,  Cell, } from 'recharts';

const data = [
  { name: 'WooCommerce Store', value: 1488},
  { name: 'Shopify Store', value: 1171 },
 
];



const COLORS = [ '#00C49F',  '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChart1 = () => {
  return (
    <div>
      <h2 className='heading1'>Portion of Sales</h2>
        <PieChart width={400} height={350}>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            legendType='square'
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
           
          </Pie>
          
        </PieChart>
        <div className="div">
        {data.map((item)=>{
          return (
            <>
             
              <p>{item.name}</p>
            </>          
            )
        })}
        </div>
        
    </div>
  )
}

export default PieChart1
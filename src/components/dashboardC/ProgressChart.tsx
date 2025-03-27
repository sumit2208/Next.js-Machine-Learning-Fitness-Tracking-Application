import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', Progress: 10 },
  { name: 'Week 2', Progress: 20 },
  { name: 'Week 3', Progress: 30 },
  { name: 'Week 4', Progress: 40 },
];

export const ProgressChart = () => {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Progress Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Progress" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

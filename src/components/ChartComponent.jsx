"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1H", price: 101200 },
  { name: "4H", price: 101400 },
  { name: "1D", price: 101000 },
  { name: "1W", price: 102500 },
  { name: "1M", price: 102900 },
  { name: "1Y", price: 102000 },
];

export default function ChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="#8884d8" tick={{ fill: "white" }} />
        <YAxis stroke="#8884d8" tick={{ fill: "white" }} />
        <Tooltip
          contentStyle={{ backgroundColor: "#2D1E4F", borderColor: "#8884d8" }}
          labelStyle={{ color: "#fff" }}
        />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorPrice)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
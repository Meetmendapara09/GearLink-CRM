
'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const chartData = [
  { product: 'Tubeless Tyre', sales: 98 },
  { product: 'Seat Cover', sales: 85 },
  { product: 'Headlight Bulb', sales: 72 },
  { product: 'Disc Brake Pad', sales: 65 },
  { product: 'Engine Oil', sales: 51 },
];

const chartConfig = {
  sales: {
    label: 'Sales (Units)',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function TopProductsChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart 
        accessibilityLayer 
        data={chartData} 
        layout="vertical"
        margin={{
            left: -20,
        }}
    >
        <CartesianGrid horizontal={false} />
        <YAxis
            dataKey="product"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 15) + (value.length > 15 ? '...' : '')}
            className='-translate-y-2'
        />
        <XAxis dataKey="sales" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

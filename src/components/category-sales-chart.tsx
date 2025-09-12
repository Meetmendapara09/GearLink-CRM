
'use client';

import { Pie, PieChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';

export const chartData = [
  { category: 'Lighting', sales: 25, fill: 'var(--color-lighting)' },
  { category: 'Accessories', sales: 75, fill: 'var(--color-accessories)' },
  { category: 'Tyres', sales: 150, fill: 'var(--color-tyres)' },
  { category: 'Brakes', sales: 50, fill: 'var(--color-brakes)' },
  { category: 'Engine Parts', sales: 100, fill: 'var(--color-engine)' },
  { category: 'Maintenance', sales: 20, fill: 'var(--color-maintenance)' },
];

const chartConfig = {
  sales: {
    label: 'Sales (Units)',
  },
  lighting: {
    label: 'Lighting',
    color: 'hsl(var(--chart-1))',
  },
  accessories: {
    label: 'Accessories',
    color: 'hsl(var(--chart-2))',
  },
  tyres: {
    label: 'Tyres',
    color: 'hsl(var(--chart-3))',
  },
  brakes: {
    label: 'Brakes',
    color: 'hsl(var(--chart-4))',
  },
  engine: {
    label: 'Engine Parts',
    color: 'hsl(var(--chart-5))',
  },
   maintenance: {
    label: 'Maintenance',
    color: 'hsl(var(--muted-foreground))',
  },
} satisfies ChartConfig;

export default function CategorySalesChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full aspect-square">
      <PieChart accessibilityLayer>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="sales"
          nameKey="category"
          innerRadius={60}
        />
        <ChartLegend content={<ChartLegendContent nameKey="category" />} />
      </PieChart>
    </ChartContainer>
  );
}

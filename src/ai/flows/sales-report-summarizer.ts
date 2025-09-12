'use server';

/**
 * @fileOverview An AI agent that summarizes sales reports.
 *
 * - summarizeSalesReport - A function that generates a summary of a sales report.
 * - SalesReportSummarizerInput - The input type for the summarizeSalesReport function.
 * - SalesReportSummarizerOutput - The return type for the summarizeSalesReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SalesDataSchema = z.object({
    monthlySales: z.array(z.object({ month: z.string(), sales: z.number() })).describe('Sales data for each month.'),
    categorySales: z.array(z.object({ category: z.string(), sales: z.number() })).describe('Sales data for each product category.'),
    topProducts: z.array(z.object({ product: z.string(), sales: z.number() })).describe('Sales data for the top-selling products.'),
});

const SalesReportSummarizerInputSchema = z.object({
  salesData: SalesDataSchema.describe('The sales data to be summarized.'),
});
export type SalesReportSummarizerInput = z.infer<typeof SalesReportSummarizerInputSchema>;

const SalesReportSummarizerOutputSchema = z.object({
  summary: z.string().describe('A comprehensive summary of the sales report, highlighting key trends, top performers, and areas for improvement. The summary should be in markdown format.'),
});
export type SalesReportSummarizerOutput = z.infer<typeof SalesReportSummarizerOutputSchema>;

export async function summarizeSalesReport(input: SalesReportSummarizerInput): Promise<SalesReportSummarizerOutput> {
  return salesReportSummarizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'salesReportSummarizerPrompt',
  input: {schema: SalesReportSummarizerInputSchema},
  output: {schema: SalesReportSummarizerOutputSchema},
  prompt: `You are an expert business analyst for an auto parts store in India.
  Your task is to analyze the provided sales data and generate a concise, insightful summary.

  The summary should be easy to understand for a business owner and should highlight:
  - Overall sales performance and trends based on the monthly data.
  - The best-selling product categories and what that might indicate.
  - The top-performing products.
  - Any potential insights or recommendations based on the data.

  The currency is in Indian Rupees (₹), but the data does not contain currency symbols. The sales figures represent units sold or revenue, contextually.

  Please analyze the following data:
  Monthly Sales:
  {{#each salesData.monthlySales}}
  - {{month}}: {{sales}}
  {{/each}}

  Category-wise Sales:
  {{#each salesData.categorySales}}
  - {{category}}: {{sales}}
  {{/each}}

  Top Products:
  {{#each salesData.topProducts}}
  - {{product}}: {{sales}}
  {{/each}}

  Generate a summary in markdown format. Use headings, bold text, and bullet points to structure the information clearly.
  `,
});

const salesReportSummarizerFlow = ai.defineFlow(
  {
    name: 'salesReportSummarizerFlow',
    inputSchema: SalesReportSummarizerInputSchema,
    outputSchema: SalesReportSummarizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

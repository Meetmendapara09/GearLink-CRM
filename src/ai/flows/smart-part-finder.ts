// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An AI agent that recommends auto parts and accessories based on vehicle specifications.
 *
 * - smartPartFinder - A function that recommends parts and accessories based on vehicle specifications.
 * - SmartPartFinderInput - The input type for the smartPartFinder function.
 * - SmartPartFinderOutput - The return type for the smartPartFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartPartFinderInputSchema = z.object({
  make: z.string().describe('The make of the vehicle.'),
  model: z.string().describe('The model of the vehicle.'),
  year: z.string().describe('The year of the vehicle.'),
  partDescription: z.string().describe('The description of the desired part or accessory.'),
});
export type SmartPartFinderInput = z.infer<typeof SmartPartFinderInputSchema>;

const RecommendedPartSchema = z.object({
    name: z.string().describe('The name of the recommended part.'),
    price: z.number().describe('The estimated price of the part in Indian Rupees (₹).'),
});

const SmartPartFinderOutputSchema = z.object({
  recommendedParts: z
    .array(RecommendedPartSchema)
    .describe('A list of recommended parts and accessories, including their name and price.'),
  reasoning: z.string().describe('The reasoning behind the recommendations.'),
});
export type SmartPartFinderOutput = z.infer<typeof SmartPartFinderOutputSchema>;

export async function smartPartFinder(input: SmartPartFinderInput): Promise<SmartPartFinderOutput> {
  return smartPartFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartPartFinderPrompt',
  input: {schema: SmartPartFinderInputSchema},
  output: {schema: SmartPartFinderOutputSchema},
  prompt: `You are an expert auto parts advisor for a shop in India.

  Based on the make, model, and year of the vehicle, and the desired part description, recommend a list of specific parts and accessories that would fit the vehicle.
  For each part, provide a name and an estimated price in Indian Rupees.
  Explain the reasoning behind the recommendation.

  Make: {{{make}}}
  Model: {{{model}}}
  Year: {{{year}}}
  Part Description: {{{partDescription}}}

  Please provide the recommendations in a structured JSON format.
  `,
});

const smartPartFinderFlow = ai.defineFlow(
  {
    name: 'smartPartFinderFlow',
    inputSchema: SmartPartFinderInputSchema,
    outputSchema: SmartPartFinderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

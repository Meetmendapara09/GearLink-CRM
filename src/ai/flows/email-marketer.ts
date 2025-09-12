'use server';

/**
 * @fileOverview An AI agent that generates marketing emails for auto parts promotions.
 *
 * - emailMarketer - A function that generates an email subject and body for a promotion.
 * - EmailMarketerInput - The input type for the emailMarketer function.
 * - EmailMarketerOutput - The return type for the emailMarketer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EmailMarketerInputSchema = z.object({
  campaignName: z.string().describe('The name of the marketing campaign.'),
  specialOffer: z.string().describe('A description of the special offer or promotion.'),
});
export type EmailMarketerInput = z.infer<typeof EmailMarketerInputSchema>;

const EmailMarketerOutputSchema = z.object({
  subject: z.string().describe('The generated subject line for the email.'),
  body: z.string().describe('The generated body content for the email in HTML format.'),
});
export type EmailMarketerOutput = z.infer<typeof EmailMarketerOutputSchema>;

export async function emailMarketer(input: EmailMarketerInput): Promise<EmailMarketerOutput> {
  return emailMarketerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'emailMarketerPrompt',
  input: {schema: EmailMarketerInputSchema},
  output: {schema: EmailMarketerOutputSchema},
  prompt: `You are an expert email marketer for an auto parts store in India called GearLink.

  Your task is to generate a compelling marketing email to promote a special offer.

  The email should be friendly, professional, and persuasive. It should clearly explain the offer and encourage customers to visit the store or website.

  The audience is Indian vehicle owners, so the language should be appropriate for that market. Use Indian Rupee symbol (₹) where necessary.

  Generate the email body in simple HTML format. Do not use complex styles, just paragraphs, bold tags, and maybe a call-to-action link.

  Campaign Name: {{{campaignName}}}
  Special Offer: {{{specialOffer}}}

  Generate a subject line and an HTML email body.
  `,
});

const emailMarketerFlow = ai.defineFlow(
  {
    name: 'emailMarketerFlow',
    inputSchema: EmailMarketerInputSchema,
    outputSchema: EmailMarketerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

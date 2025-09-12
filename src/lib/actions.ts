'use server';

import {
  smartPartFinder,
  type SmartPartFinderInput,
} from '@/ai/flows/smart-part-finder';
import {
  emailMarketer,
  type EmailMarketerInput,
} from '@/ai/flows/email-marketer';
import {
    summarizeSalesReport,
    type SalesReportSummarizerInput,
} from '@/ai/flows/sales-report-summarizer';
import { z } from 'zod';
import { signInWithEmail, signUpWithEmail } from './auth';

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});


export async function loginAction(values: z.infer<typeof loginSchema>) {
    const validatedFields = loginSchema.safeParse(values);
    if (!validatedFields.success) {
        return { success: false, error: 'Invalid fields' };
    }
    return await signInWithEmail(validatedFields.data);
}

export async function signupAction(values: z.infer<typeof signupSchema>) {
    const validatedFields = signupSchema.safeParse(values);
    if (!validatedFields.success) {
        return { success: false, error: 'Invalid fields' };
    }
    return await signUpWithEmail(validatedFields.data);
}


export async function getPartRecommendations(input: SmartPartFinderInput) {
  try {
    const result = await smartPartFinder(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}

export async function generateMarketingEmail(input: EmailMarketerInput) {
  try {
    const result = await emailMarketer(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}

export async function getSalesReportSummary(input: SalesReportSummarizerInput) {
    try {
        const result = await summarizeSalesReport(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}

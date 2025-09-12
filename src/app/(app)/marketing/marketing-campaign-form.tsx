'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { generateMarketingEmail } from '@/lib/actions';
import type { EmailMarketerOutput } from '@/ai/flows/email-marketer';
import { Loader2, Sparkles, Wand2, Send, Pencil } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  campaignName: z.string().min(5, {
    message: 'Campaign name must be at least 5 characters.',
  }),
  specialOffer: z.string().min(10, {
    message: 'Offer description must be at least 10 characters.',
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function MarketingCampaignForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<EmailMarketerOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      campaignName: '',
      specialOffer: '',
    },
  });

  function onSubmit(values: FormData) {
    setResult(null);
    startTransition(async () => {
      const response = await generateMarketingEmail(values);
      if (response.success && response.data) {
        setResult(response.data);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: response.error || 'Failed to generate email.',
        });
      }
    });
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
            <CardTitle>Create New Campaign</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="campaignName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Campaign Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Monsoon Discount Bonanza" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialOffer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Offer / Promotion Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the offer, e.g., 'Flat 20% off on all MRF tyres for the next 7 days'"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate Email
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isPending && (
        <div className="text-center p-12">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">
            Our AI is drafting your email...
          </p>
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-6 animate-in fade-in-50">
          <Separator />
          <div className="text-center">
            <h2 className="text-2xl font-bold font-headline flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" />
              Your Email is Ready
            </h2>
          </div>
            <Card>
              <CardHeader>
                <CardTitle>Generated Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                    <h3 className="font-semibold">Subject</h3>
                    <p className="text-sm text-muted-foreground p-3 rounded-md border bg-gray-50">{result.subject}</p>
                </div>
                 <div className="space-y-1">
                    <h3 className="font-semibold">Body</h3>
                    <div 
                        className="text-sm text-muted-foreground p-3 rounded-md border bg-gray-50 [&_p]:mb-2"
                        dangerouslySetInnerHTML={{ __html: result.body }}
                    />
                </div>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                  <Button variant="outline"><Pencil className="mr-2 h-4 w-4" /> Edit</Button>
                  <Button><Send className="mr-2 h-4 w-4" /> Send Campaign</Button>
              </CardFooter>
            </Card>
        </div>
      )}
    </div>
  );
}

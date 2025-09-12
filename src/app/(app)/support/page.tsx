
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'How do I add a new product to my inventory?',
    answer:
      "To add a new product, navigate to the 'Products' page from the sidebar. Click the 'Add Product' button, fill in the details like name, category, price, and stock, and then click 'Save'. Your new product will appear in the inventory list.",
  },
  {
    question: 'Can I track the status of my sales deals?',
    answer:
      "Yes! The 'Sales Pipeline' page is designed for this. It's a Kanban board where you can see all your deals organized by stage. You can drag and drop deals from one stage to another as they progress, from 'New Lead' to 'Closed - Won'.",
  },
  {
    question: 'How does the Smart Part Finder work?',
    answer:
      "The 'Smart Finder' uses AI to recommend parts. Go to the 'Smart Finder' page, enter the vehicle's make, model, and year, along with a description of the part you need. The AI will analyze your input and provide a list of suitable parts and its reasoning.",
  },
  {
    question: 'Is it possible to export my sales reports?',
    answer:
      "Absolutely. On the 'Sales Reports' page, after viewing your charts and data, you can click the 'Export as PDF' button to download a comprehensive PDF of the current report view for your records.",
  },
];

const formSchema = z.object({
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  description: z.string().min(20, {
    message: 'Description must be at least 20 characters.',
  }),
  priority: z.enum(['low', 'medium', 'high']),
});

type FormData = z.infer<typeof formSchema>;

export default function SupportPage() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      description: '',
      priority: 'medium',
    },
  });

  function onSubmit(values: FormData) {
    toast({
      title: 'Bug Report Submitted',
      description: "Thank you! We've received your report and will look into it.",
    });
    form.reset();
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Help & Support
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Find answers to common questions or submit a report. We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to common questions about GearLink.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Submit a Report</CardTitle>
                  <CardDescription>
                    Can't find an answer? Let us know about the issue.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Customer search issue" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe the issue in detail."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Priority</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a priority" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Report
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}

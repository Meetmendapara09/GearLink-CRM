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
import { Card, CardContent } from '@/components/ui/card';
import { getPartRecommendations } from '@/lib/actions';
import type { SmartPartFinderOutput } from '@/ai/flows/smart-part-finder';
import { Loader2, Sparkles, Wand2, FilePlus2, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const formSchema = z.object({
  make: z.string().min(2, {
    message: 'Make must be at least 2 characters.',
  }),
  model: z.string().min(1, {
    message: 'Model is required.',
  }),
  year: z
    .string()
    .length(4, { message: 'Year must be 4 digits.' })
    .regex(/^\d{4}$/, { message: 'Please enter a valid year.' }),
  partDescription: z.string().min(5, {
    message: 'Description must be at least 5 characters.',
  }),
});

type FormData = z.infer<typeof formSchema>;

type RecommendedPart = SmartPartFinderOutput['recommendedParts'][0];

export default function SmartFinderForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<SmartPartFinderOutput | null>(null);
  const [selectedParts, setSelectedParts] = useState<RecommendedPart[]>([]);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      make: '',
      model: '',
      year: '',
      partDescription: '',
    },
  });

  function onSubmit(values: FormData) {
    setResult(null);
    setSelectedParts([]);
    startTransition(async () => {
      const response = await getPartRecommendations(values);
      if (response.success && response.data) {
        setResult(response.data);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: response.error || 'Failed to get recommendations.',
        });
      }
    });
  }

  const handlePartSelection = (part: RecommendedPart, checked: boolean) => {
    setSelectedParts((prev) =>
      checked ? [...prev, part] : prev.filter((p) => p.name !== part.name)
    );
  };

  const handleAddToInvoice = () => {
    toast({
      title: 'Success',
      description: `${selectedParts.length} part(s) added to a new invoice draft.`,
      action: <Check className="h-5 w-5" />,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="make"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Make</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Honda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Model</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Activa 6G" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 2023" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="partDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Part or Accessory Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the part you need, e.g., 'durable seat cover with red stitching'"
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
                  Find Parts
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
            Our AI is searching for the best parts...
          </p>
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-6 animate-in fade-in-50">
          <Separator />
          <div className="text-center">
            <h2 className="text-2xl font-bold font-headline flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" />
              Recommendations Found
            </h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 overflow-x-auto">
                  <h3 className="font-semibold mb-2">Recommended Parts</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]"></TableHead>
                        <TableHead>Part Name</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {result.recommendedParts.map((part, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Checkbox
                              id={`part-${index}`}
                              onCheckedChange={(checked) =>
                                handlePartSelection(part, !!checked)
                              }
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            {part.name}
                          </TableCell>
                          <TableCell className="text-right">
                            ₹{part.price.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="md:col-span-1">
                  <h3 className="font-semibold mb-2">Reasoning</h3>
                  <p className="text-sm text-muted-foreground bg-secondary/50 p-4 rounded-lg">
                    {result.reasoning}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          {selectedParts.length > 0 && (
            <div className="flex justify-end animate-in fade-in-25">
              <Button onClick={handleAddToInvoice}>
                <FilePlus2 className="mr-2 h-4 w-4" />
                Add {selectedParts.length} Item(s) to New Invoice
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

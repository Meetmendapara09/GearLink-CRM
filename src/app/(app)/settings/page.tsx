
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

const profileFormSchema = z.object({
  storeName: z.string().min(3, 'Store name must be at least 3 characters.'),
  address: z.string().min(10, 'Address must be at least 10 characters.'),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, 'Please enter a valid phone number.'),
});

type ProfileFormData = z.infer<typeof profileFormSchema>;

function ProfileForm() {
  const { toast } = useToast();
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      storeName: 'GearLink',
      address: '123 Auto Lane, New Delhi, India',
      phone: '+91 98765 43210',
    },
  });

  function onSubmit(values: ProfileFormData) {
    toast({
      title: 'Profile Updated',
      description: 'Your business information has been saved successfully.',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <FormField
            control={form.control}
            name="storeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your business name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your business address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your contact number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Form>
  );
}


export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your application settings and preferences.
        </p>
      </div>

      <Card>
          <CardHeader>
              <CardTitle>Business Profile</CardTitle>
              <CardDescription>
                  Update your store's information. This will be used in invoices and other communications.
              </CardDescription>
          </CardHeader>
          <ProfileForm />
      </Card>
    </div>
  );
}

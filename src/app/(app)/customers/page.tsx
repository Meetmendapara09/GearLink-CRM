'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search, MoreHorizontal, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { customers } from '@/lib/data/customers';
import type { Customer } from '@/lib/types';


const CustomerRow = ({ customer }: { customer: Customer }) => {
    const { toast } = useToast();

    const handleCall = (customerName: string) => {
        toast({
            title: 'Calling Customer',
            description: `Initiating call to ${customerName}...`,
        });
    }

    return (
        <TableRow key={customer.email}>
            <TableCell>
            <div className="flex items-center gap-3">
                <Avatar>
                <AvatarImage
                    src={`https://i.pravatar.cc/40?u=${customer.email}`}
                />
                <AvatarFallback>{customer.avatar}</AvatarFallback>
                </Avatar>
                <div className="font-medium">
                <p className="truncate">{customer.name}</p>
                <p className="text-sm text-muted-foreground truncate">{customer.email}</p>
                </div>
            </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{customer.phone}</TableCell>
            <TableCell>
            <Badge
                variant={
                customer.status === 'Active'
                    ? 'default'
                    : customer.status === 'New'
                    ? 'secondary'
                    : 'outline'
                }
            >
                {customer.status}
            </Badge>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{customer.totalSpent}</TableCell>
            <TableCell className="hidden sm:table-cell">{customer.lastPurchase}</TableCell>
            <TableCell>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => handleCall(customer.name)}>
                        <a href={`tel:${customer.phone}`} className='flex items-center w-full'>
                            <Phone className="mr-2 h-4 w-4" />
                            Call Customer
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Log Activity</DropdownMenuItem>
                    <DropdownMenuItem>Send Email</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
};


export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const getFilteredCustomers = (status: string) => {
    if (status === 'all') return customers;
    return customers.filter((c) => c.status.toLowerCase().replace(' ', '') === status);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Customers
        </h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search customers..." className="pl-8" />
          </div>
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Customer Records</CardTitle>
            <CardDescription>
              View and manage your customer data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Phone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Total Spent</TableHead>
                  <TableHead className="hidden sm:table-cell">Last Purchase</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {getFilteredCustomers(activeTab).map(customer => (
                    <CustomerRow key={customer.email} customer={customer} />
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}

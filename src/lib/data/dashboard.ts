/**
 * @file This file contains mock data for the dashboard.
 * In a real application, this data would be dynamically generated from various database tables (e.g., MariaDB).
 * For example, total revenue would be a SUM() query on an 'invoices' table, and customer counts a COUNT() on a 'customers' table.
 */

import { IndianRupee, Users, Wrench, FileWarning, Kanban, ClipboardList } from 'lucide-react';

export const summaryCards = [
  {
    title: 'Total Revenue',
    value: '₹1,25,430.50',
    icon: IndianRupee,
    change: '+20.1% from last month',
    href: '/reports'
  },
  {
    title: 'Total Customers',
    value: '8',
    icon: Users,
    change: '+2 from last month',
    href: '/customers'
  },
  {
    title: 'Total Stock',
    value: '1,892',
    icon: Wrench,
    change: '-50 since last week',
    href: '/products'
  },
  {
    title: 'Overdue Invoices',
    value: '1',
    icon: FileWarning,
    change: 'Totaling ₹4,130.00',
    href: '/invoices'
  },
    {
    title: 'Active Deals',
    value: '6',
    icon: Kanban,
    change: 'In pipeline',
    href: '/sales-pipeline'
  },
    {
    title: 'Pending Tasks',
    value: '5',
    icon: ClipboardList,
    change: 'To do or in progress',
    href: '/tasks'
  },
];

export const recentSales = [
  {
    id: 'ORD001',
    customer: 'Suresh Kumar',
    amount: '₹2,500.00',
    status: 'Paid',
    date: '2024-05-20',
  },
  {
    id: 'ORD002',
    customer: 'Anjali Sharma',
    amount: '₹1,500.00',
    status: 'Pending',
    date: '2024-05-21',
  },
  {
    id: 'ORD003',
    customer: 'Ravi Verma',
    amount: '₹3,500.00',
    status: 'Paid',
    date: '2024-05-22',
  },
  {
    id: 'ORD004',
    customer: 'Priya Singh',
    amount: '₹450.00',
    status: 'Paid',
    date: '2024-05-23',
  },
  {
    id: 'ORD005',
    customer: 'Mohan Lal',
    amount: '₹800.00',
    status: 'Overdue',
    date: '2024-05-15',
  },
  {
    id: 'ORD006',
    customer: 'Sunita Gupta',
    amount: '₹1,250.00',
    status: 'Paid',
    date: '2024-05-24',
  },
  {
    id: 'ORD007',
    customer: 'Amit Patel',
    amount: '₹600.00',
    status: 'Pending',
    date: '2024-05-25',
  },
];

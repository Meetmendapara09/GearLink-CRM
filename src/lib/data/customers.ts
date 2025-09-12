/**
 * @file This file contains mock data for customers.
 * In a real application, this data would be fetched from a database (e.g., MariaDB).
 * The `customers` table could have columns like: name, email, phone, total_spent, last_purchase_date, status.
 */

import type { Customer } from '@/lib/types';

export const customers: Customer[] = [
  {
    name: 'Suresh Kumar',
    email: 'suresh.k@example.com',
    phone: '+91 98765 43210',
    totalSpent: '₹12,500.00',
    lastPurchase: '2024-05-20',
    avatar: 'SK',
    status: 'Active',
  },
  {
    name: 'Anjali Sharma',
    email: 'anjali.s@example.com',
    phone: '+91 87654 32109',
    totalSpent: '₹8,200.00',
    lastPurchase: '2024-05-21',
    avatar: 'AS',
    status: 'Active',
  },
  {
    name: 'Ravi Verma',
    email: 'ravi.v@example.com',
    phone: '+91 76543 21098',
    totalSpent: '₹25,150.00',
    lastPurchase: '2024-05-22',
    avatar: 'RV',
    status: 'Active',
  },
  {
    name: 'Priya Singh',
    email: 'priya.s@example.com',
    phone: '+91 65432 10987',
    totalSpent: '₹4,800.00',
    lastPurchase: '2024-05-23',
    avatar: 'PS',
    status: 'New',
  },
  {
    name: 'Mohan Lal',
    email: 'mohan.l@example.com',
    phone: '+91 91234 56789',
    totalSpent: '₹18,900.00',
    lastPurchase: '2024-05-15',
    avatar: 'ML',
    status: 'Inactive',
  },
  {
    name: 'Sunita Gupta',
    email: 'sunita.g@example.com',
    phone: '+91 99887 76655',
    totalSpent: '₹9,750.00',
    lastPurchase: '2024-05-24',
    avatar: 'SG',
    status: 'Active',
  },
  {
    name: 'Amit Patel',
    email: 'amit.p@example.com',
    phone: '+91 98765 12345',
    totalSpent: '₹2,100.00',
    lastPurchase: '2024-05-25',
    avatar: 'AP',
    status: 'New',
  },
  {
    name: 'Kavita Reddy',
    email: 'kavita.r@example.com',
    phone: '+91 87654 54321',
    totalSpent: '₹33,400.00',
    lastPurchase: '2024-05-18',
    avatar: 'KR',
    status: 'Active',
  },
];

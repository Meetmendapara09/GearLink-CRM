/**
 * @file This file contains mock data for invoices.
 * In a real application, this data would be fetched from a database (e.g., MariaDB).
 * The data would likely be spread across multiple tables, such as `invoices` and `invoice_items`.
 */

import type { Invoice } from '@/lib/types';

export const invoices: Invoice[] = [
  {
    id: 'INV001',
    customer: 'Suresh Kumar',
    email: 'suresh.k@example.com',
    amount: '₹2,950.00',
    dueDate: '2024-06-15',
    issuedDate: '2024-05-15',
    status: 'Paid',
    items: [
      {
        name: 'LED Headlight Bulb',
        quantity: 1,
        price: '₹1,200.00',
        total: '₹1,200.00',
      },
      {
        name: 'Chain Lubricant',
        quantity: 2,
        price: '₹350.00',
        total: '₹700.00',
      },
      {
        name: 'Mobile Holder',
        quantity: 1,
        price: '₹600.00',
        total: '₹600.00',
      },
    ],
    subtotal: '₹2,500.00',
    tax: '₹450.00',
  },
  {
    id: 'INV002',
    customer: 'Anjali Sharma',
    email: 'anjali.s@example.com',
    amount: '₹1,770.00',
    dueDate: '2024-06-20',
    issuedDate: '2024-05-20',
    status: 'Pending',
    items: [
      { name: 'Sporty Seat Cover', quantity: 1, price: '₹1,500.00', total: '₹1,500.00' },
    ],
    subtotal: '₹1,500.00',
    tax: '₹270.00',
  },
  {
    id: 'INV003',
    customer: 'Ravi Verma',
    email: 'ravi.v@example.com',
    amount: '₹4,130.00',
    dueDate: '2024-05-30',
    issuedDate: '2024-04-30',
    status: 'Overdue',
    items: [
      { name: 'Tubeless Tyre (Rear)', quantity: 1, price: '₹3,500.00', total: '₹3,500.00' },
    ],
    subtotal: '₹3,500.00',
    tax: '₹630.00',
  },
  {
    id: 'INV004',
    customer: 'Priya Singh',
    email: 'priya.s@example.com',
    amount: '₹531.00',
    dueDate: '2024-06-25',
    issuedDate: '2024-05-25',
    status: 'Paid',
    items: [{ name: 'Disc Brake Pad', quantity: 1, price: '₹450.00', total: '₹450.00' }],
    subtotal: '₹450.00',
    tax: '₹81.00',
  },
  {
    id: 'INV005',
    customer: 'Mohan Lal',
    email: 'mohan.l@example.com',
    amount: '₹944.00',
    dueDate: '2024-07-01',
    issuedDate: '2024-06-01',
    status: 'Pending',
    items: [{ name: 'Engine Oil', quantity: 1, price: '₹800.00', total: '₹800.00' }],
    subtotal: '₹800.00',
    tax: '₹144.00',
  },
  {
    id: 'INV006',
    customer: 'Sunita Gupta',
    email: 'sunita.g@example.com',
    amount: '₹1,475.00',
    dueDate: '2024-06-18',
    issuedDate: '2024-05-18',
    status: 'Paid',
    items: [
      {
        name: 'Performance Air Filter',
        quantity: 1,
        price: '₹1,250.00',
        total: '₹1,250.00',
      },
    ],
    subtotal: '₹1,250.00',
    tax: '₹225.00',
  },
  {
    id: 'INV007',
    customer: 'Amit Patel',
    email: 'amit.p@example.com',
    amount: '₹708.00',
    dueDate: '2024-07-05',
    issuedDate: '2024-06-05',
    status: 'Pending',
    items: [{ name: 'Mobile Holder', quantity: 1, price: '₹600.00', total: '₹600.00' }],
    subtotal: '₹600.00',
    tax: '₹108.00',
  },
  {
    id: 'INV008',
    customer: 'Kavita Reddy',
    email: 'kavita.r@example.com',
    amount: '₹39,412.00',
    dueDate: '2024-06-01',
    issuedDate: '2024-05-01',
    status: 'Paid',
    items: [
      {
        name: 'Full Body Kit',
        quantity: 1,
        price: '₹25,000.00',
        total: '₹25,000.00',
      },
      {
        name: 'Custom Exhaust',
        quantity: 1,
        price: '₹8,400.00',
        total: '₹8,400.00',
      },
    ],
    subtotal: '₹33,400.00',
    tax: '₹6,012.00',
  },
];

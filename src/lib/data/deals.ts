/**
 * @file This file contains mock data for sales deals.
 * In a real application, this data would be fetched from a database (e.g., MariaDB).
 * The `deals` table could have columns like: id, title, customer_id, value, stage, assignee_id, etc.
 */

import type { Deal } from '@/lib/types';

export const deals: Deal[] = [
  { id: 'DEAL-001', title: 'Bulk order of seat covers', customer: 'Anjali Sharma', value: '₹50,000', stage: 'Proposal Sent', assignee: { name: 'RK', avatar: 'https://i.pravatar.cc/32?u=rk' }},
  { id: 'DEAL-002', title: 'Dealership accessory package', customer: 'Ravi Verma', value: '₹1,20,000', stage: 'Negotiation', assignee: { name: 'SP', avatar: 'https://i.pravatar.cc/32?u=sp' } },
  { id: 'DEAL-003', title: 'Monthly restock of lubricants', customer: 'Suresh Kumar', value: '₹25,000', stage: 'Contacted', assignee: { name: 'RK', avatar: 'https://i.pravatar.cc/32?u=rk' } },
  { id: 'DEAL-004', title: 'Custom lighting setup for 10 bikes', customer: 'Priya Singh', value: '₹75,000', stage: 'New Lead', assignee: { name: 'SP', avatar: 'https://i.pravatar.cc/32?u=sp' } },
  { id: 'DEAL-005', title: 'Tyre replacement for fleet', customer: 'Kavita Reddy', value: '₹2,50,000', stage: 'Closed - Won', assignee: { name: 'VM', avatar: 'https://i.pravatar.cc/32?u=vm' } },
  { id: 'DEAL-006', title: 'Performance parts for racing team', customer: 'Amit Patel', value: '₹85,000', stage: 'New Lead', assignee: { name: 'SP', avatar: 'https://i.pravatar.cc/32?u=sp' } },
  { id: 'DEAL-007', title: 'Annual maintenance contract', customer: 'Sunita Gupta', value: '₹60,000', stage: 'Proposal Sent', assignee: { name: 'RK', avatar: 'https://i.pravatar.cc/32?u=rk' } },
  { id: 'DEAL-008', title: 'Bulk helmet order', customer: 'Mohan Lal', value: '₹40,000', stage: 'Contacted', assignee: { name: 'VM', avatar: 'https://i.pravatar.cc/32?u=vm' } },
];

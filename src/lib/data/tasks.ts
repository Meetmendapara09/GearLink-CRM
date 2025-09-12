/**
 * @file This file contains mock data for tasks.
 * In a real application, this data would be fetched from a database (e.g., MariaDB).
 * The `tasks` table could have columns like: id, title, assignee_id, priority, due_date, status.
 */

import type { Task } from '@/lib/types';

export const tasks: Task[] = [
  { id: 'TASK-001', title: 'Follow up with Anjali Sharma', assignee: { name: 'RK', avatar: 'https://i.pravatar.cc/32?u=rk' }, priority: 'High', dueDate: '2024-06-10', status: 'To Do' },
  { id: 'TASK-002', title: 'Send proposal for bulk order', assignee: { name: 'SP', avatar: 'https://i.pravatar.cc/32?u=sp' }, priority: 'High', dueDate: '2024-06-12', status: 'In Progress' },
  { id: 'TASK-003', title: 'Prepare monthly sales report', assignee: { name: 'VM', avatar: 'https://i.pravatar.cc/32?u=vm' }, priority: 'Medium', dueDate: '2024-06-15', status: 'To Do' },
  { id: 'TASK-004', title: 'Call Ravi Verma about new products', assignee: { name: 'RK', avatar: 'https://i.pravatar.cc/32?u=rk' }, priority: 'Low', dueDate: '2024-06-11', status: 'Done' },
  { id: 'TASK-005', title: 'Schedule meeting with dealership', assignee: { name: 'SP', avatar: 'https://i.pravatar.cc/32?u=sp' }, priority: 'High', dueDate: '2024-06-14', status: 'In Progress' },
  { id: 'TASK-006', title: 'Restock performance air filters', assignee: { name: 'VM', avatar: 'https://i.pravatar.cc/32?u=vm' }, priority: 'Medium', dueDate: '2024-06-20', status: 'To Do' },
  { id: 'TASK-007', title: 'Finalize Q2 marketing campaign', assignee: { name: 'RK', avatar: 'https://i.pravatar.cc/32?u=rk' }, priority: 'High', dueDate: '2024-06-18', status: 'Done' },
];

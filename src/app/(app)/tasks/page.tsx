
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
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { useState } from 'react';
import type { Task } from '@/lib/types';
import { tasks } from '@/lib/data/tasks';

const priorityVariant = {
    High: 'destructive',
    Medium: 'secondary',
    Low: 'outline',
} as const;

const statusVariant = {
    'To Do': 'secondary',
    'In Progress': 'default',
    'Done': 'outline',
} as const;


const TaskRow = ({ task }: { task: Task }) => (
    <TableRow key={task.id}>
    <TableCell className="font-medium max-w-[200px] truncate">{task.title}</TableCell>
    <TableCell className="hidden sm:table-cell">
        <div className="flex items-center gap-2">
            <Avatar className='h-8 w-8'>
                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                <AvatarFallback>{task.assignee.name.substring(0,2)}</AvatarFallback>
            </Avatar>
            <span>{task.assignee.name}</span>
        </div>
    </TableCell>
    <TableCell>
        <Badge variant={priorityVariant[task.priority]}>{task.priority}</Badge>
    </TableCell>
    <TableCell className="hidden md:table-cell">{task.dueDate}</TableCell>
    <TableCell>
        <Badge variant={statusVariant[task.status]}>{task.status}</Badge>
    </TableCell>
  </TableRow>
);


export default function TasksPage() {
    const [activeTab, setActiveTab] = useState('all');

    const getFilteredTasks = (status: string) => {
        if (status === 'all') return tasks;
        return tasks.filter(t => t.status.toLowerCase().replace(' ', '') === status);
    }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Task Management
        </h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="todo">To Do</TabsTrigger>
            <TabsTrigger value="inprogress">In Progress</TabsTrigger>
            <TabsTrigger value="done">Done</TabsTrigger>
          </TabsList>
           <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search tasks..." className="pl-8" />
          </div>
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Task List</CardTitle>
            <CardDescription>
              Manage and track your team's tasks and activities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden sm:table-cell">Assignee</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="hidden md:table-cell">Due Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
                <TableBody>
                  {getFilteredTasks(activeTab).map(task => (
                      <TaskRow key={task.id} task={task} />
                  ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}


'use client';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { tasks } from '@/lib/data/tasks';
import { invoices } from '@/lib/data/invoices';
import { useMemo } from 'react';

const localizer = momentLocalizer(moment);

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: {
    type: 'task' | 'invoice';
    id: string;
  };
}

export default function CalendarView() {
  const events: CalendarEvent[] = useMemo(() => {
    const taskEvents: CalendarEvent[] = tasks.map((task) => ({
      title: `Task: ${task.title}`,
      start: new Date(task.dueDate),
      end: new Date(task.dueDate),
      allDay: true,
      resource: { type: 'task', id: task.id },
    }));

    const invoiceEvents: CalendarEvent[] = invoices.map((invoice) => ({
      title: `Invoice Due: ${invoice.id}`,
      start: new Date(invoice.dueDate),
      end: new Date(invoice.dueDate),
      allDay: true,
      resource: { type: 'invoice', id: invoice.id },
    }));

    return [...taskEvents, ...invoiceEvents];
  }, []);

  const eventStyleGetter = (event: CalendarEvent) => {
    const isTask = event.resource.type === 'task';
    const style = {
      backgroundColor: isTask ? 'hsl(var(--primary))' : 'hsl(var(--destructive))',
      borderRadius: '4px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
      padding: '2px 5px',
    };
    return {
      style: style,
    };
  };

  return (
    <div className="h-[75vh] bg-card p-4 rounded-lg border">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ flex: 1 }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
}

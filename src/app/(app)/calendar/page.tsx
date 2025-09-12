
import CalendarView from '@/components/calendar-view';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function CalendarPage() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Calendar
        </h1>
        <p className="text-muted-foreground">
            A unified view of your tasks and invoice due dates.
        </p>
      </div>
      <div className='flex-1 h-full'>
         <CalendarView />
      </div>
    </div>
  );
}

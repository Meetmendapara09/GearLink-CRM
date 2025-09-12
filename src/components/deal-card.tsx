'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Deal } from '@/lib/types';

export const DealCard = ({ deal }: { deal: Deal }) => (
  <Card>
    <CardContent className="p-4">
      <h4 className="font-semibold text-base">{deal.title}</h4>
      <p className="text-sm text-muted-foreground mb-3">{deal.customer}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">{deal.value}</span>
        <Avatar className='h-8 w-8'>
          <AvatarImage src={deal.assignee.avatar} alt={deal.assignee.name} />
          <AvatarFallback>{deal.assignee.name.substring(0,2)}</AvatarFallback>
        </Avatar>
      </div>
    </CardContent>
  </Card>
);

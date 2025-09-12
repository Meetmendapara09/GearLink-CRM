'use client';

import { Badge } from '@/components/ui/badge';
import type { Deal } from '@/lib/types';
import { DealCard } from '@/components/deal-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from './ui/card';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
}

export const PipelineColumn = ({ stage, deals }: { stage: string; deals: Deal[] }) => {
    const totalValue = deals.reduce((sum, deal) => {
        const value = parseInt(deal.value.replace(/[^0-9]/g, ''), 10);
        return sum + (isNaN(value) ? 0 : value);
    }, 0);


    return (
        <div className="flex-1 min-w-[280px] flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 px-1">
                <div className='flex items-center gap-2'>
                    <h3 className="text-lg font-semibold tracking-tight font-headline">{stage}</h3>
                    <Badge variant="secondary">{deals.length}</Badge>
                </div>
                <div className='font-bold text-sm text-muted-foreground'>
                    {formatCurrency(totalValue)}
                </div>
            </div>
            <Card className="bg-muted/50 h-full flex-1">
                <CardContent className='p-2 h-full'>
                    <ScrollArea className='h-full'>
                        <div className='p-2 space-y-4'>
                            {deals.length > 0 ? (
                                deals.map(deal => <DealCard key={deal.id} deal={deal} />)
                            ) : (
                                <div className='text-center text-sm text-muted-foreground pt-12'>
                                    No deals in this stage.
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
};

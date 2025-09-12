'use client';

import { deals } from '@/lib/data/deals';
import type { Deal } from '@/lib/types';
import { PipelineColumn } from '@/components/pipeline-column';

const defaultStages = ['New Lead', 'Contacted', 'Proposal Sent', 'Negotiation', 'Closed - Won'];

export default function SalesPipelineBoard({ stages = defaultStages }: { stages?: string[] }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
      {stages.map(stage => (
        <PipelineColumn 
          key={stage} 
          stage={stage} 
          deals={deals.filter(d => d.stage === stage)} 
        />
      ))}
    </div>
  );
}

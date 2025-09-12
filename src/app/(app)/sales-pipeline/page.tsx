import SalesPipelineBoard from '@/components/sales-pipeline-board';

export default function SalesPipelinePage() {
  return (
    <div className="space-y-8 flex flex-col flex-1 h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Sales Pipeline
        </h1>
      </div>
      <SalesPipelineBoard />
    </div>
  );
}

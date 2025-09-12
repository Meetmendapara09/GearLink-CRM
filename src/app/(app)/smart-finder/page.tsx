import SmartFinderForm from './smart-finder-form';

export default function SmartFinderPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Smart Part Finder
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Use our AI-powered tool to find the perfect parts and accessories for
          any vehicle. Just enter the details below.
        </p>
      </div>

      <SmartFinderForm />
    </div>
  );
}

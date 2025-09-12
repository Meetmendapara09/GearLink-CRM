import MarketingCampaignForm from './marketing-campaign-form';

export default function MarketingPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          AI-Powered Email Marketing
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Create compelling promotional emails in seconds. Just describe your offer, and our AI will draft the perfect message.
        </p>
      </div>

      <MarketingCampaignForm />
    </div>
  );
}


import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cog } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <Link href="/" className="flex items-center justify-center">
          <Cog className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold font-headline">GearLink</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Go to App</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12 md:py-24">
            <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
                <h1>Privacy Policy</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                    This Privacy Policy describes Our policies and procedures on the
                    collection, use and disclosure of Your information when You use the
                    Service and tells You about Your privacy rights and how the law
                    protects You.
                </p>

                <h2>Interpretation and Definitions</h2>
                <h3>Interpretation</h3>
                <p>
                    The words of which the initial letter is capitalized have meanings
                    defined under the following conditions. The following definitions
                    shall have the same meaning regardless of whether they appear in
                    singular or in plural.
                </p>

                <h2>Collecting and Using Your Personal Data</h2>
                <h3>Types of Data Collected</h3>
                <h4>Personal Data</h4>
                <p>
                    While using Our Service, We may ask You to provide Us with certain
                    personally identifiable information that can be used to contact or
                    identify You. Personally identifiable information may include, but is
                    not limited to:
                </p>
                <ul>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Usage Data</li>
                </ul>

                <h4>Usage Data</h4>
                <p>
                    Usage Data is collected automatically when using the Service.
                </p>
                <p>
                    Usage Data may include information such as Your Device's Internet
                    Protocol address (e.g. IP address), browser type, browser version,
                    the pages of our Service that You visit, the time and date of Your
                    visit, the time spent on those pages, unique device identifiers and
                    other diagnostic data.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, You can contact
                    us:
                </p>
                <ul>
                    <li>By email: contact@gearlink.in</li>
                </ul>
            </div>
        </div>
      </main>
    </div>
  );
}


import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cog } from 'lucide-react';

export default function TermsPage() {
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
                <h1>Terms of Service</h1>
                <p>
                    Please read these terms of service carefully before using the GearLink
                    application.
                </p>

                <h2>1. Conditions of Use</h2>
                <p>
                    We will provide their services to you, which are subject to the
                    conditions stated below in this document. Every time you visit this
                    website, use its services or make a purchase, you accept the
                    following conditions. This is why we urge you to read them
                    carefully.
                </p>

                <h2>2. Privacy Policy</h2>
                <p>
                    Before you continue using our website we advise you to read our{' '}
                    <Link href="/privacy">privacy policy</Link> regarding our user data
                    collection. It will help you better understand our practices.
                </p>

                <h2>3. Copyright</h2>
                <p>
                    Content published on this website (digital downloads, images, texts,
                    graphics, logos) is the property of GearLink and/or its content
                    creators and protected by international copyright laws. The entire
                    compilation of the content found on this website is the exclusive
                    property of GearLink.
                </p>

                <h2>4. Communications</h2>
                <p>
                    The entire communication with us is electronic. Every time you send
                    us an email or visit our website, you are going to be communicating
                    with us. You hereby consent to receive communications from us. If
                    you subscribe to the news on our website, you are going to receive
                    regular emails from us.
                </p>

                <h2>5. Applicable Law</h2>
                <p>
                    By visiting this website, you agree that the laws of India,
                    without regard to principles of conflict laws, will govern these
                    terms of service, or any dispute of any sort that might come between
                    GearLink and you, or its business partners and associates.
                </p>

                <h2>6. Disputes</h2>
                <p>
                    Any dispute related in any way to your visit to this website or to
                    products you purchase from us shall be arbitrated by state or
                    federal court in New Delhi, India and you consent to exclusive
                    jurisdiction and venue of such courts.
                </p>
            </div>
        </div>
      </main>
    </div>
  );
}

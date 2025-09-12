import Link from 'next/link';
import { Cog } from 'lucide-react';
import SignupForm from './signup-form';

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/50">
      <div className="w-full max-w-sm p-8 space-y-8 bg-background rounded-xl shadow-lg">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center mb-4">
            <Cog className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold font-headline">GearLink</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Create an Account</h1>
          <p className="text-muted-foreground">
            Get started with GearLink today.
          </p>
        </div>
        <SignupForm />
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

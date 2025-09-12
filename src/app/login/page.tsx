import Link from 'next/link';
import { Cog } from 'lucide-react';
import LoginForm from './login-form';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/50">
      <div className="w-full max-w-sm p-8 space-y-8 bg-background rounded-xl shadow-lg">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center mb-4">
            <Cog className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold font-headline">GearLink</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account.
          </p>
        </div>
        <LoginForm />
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="font-semibold text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

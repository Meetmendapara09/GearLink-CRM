
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cog, Wrench, Users, BarChart3, Sparkles, Kanban, ClipboardList, Twitter, Facebook, Instagram, Star } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


const features = [
  {
    icon: Wrench,
    title: 'Inventory Management',
    description:
      'Keep track of all your parts and accessories with our simple inventory system.',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Manage your customer data and view their purchase history.',
  },
  {
    icon: BarChart3,
    title: 'Sales Analytics',
    description:
      'Visualize your sales data with our easy-to-understand charts.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Part Finder',
    description:
      'Use our Smart Part Finder to quickly find the right parts for any vehicle.',
  },
   {
    icon: Kanban,
    title: 'Sales Pipeline',
    description:
      'Track deals from new lead to closed-won with a visual Kanban board.',
  },
   {
    icon: ClipboardList,
    title: 'Task Management',
    description:
      'Organize your team\'s workload and keep track of important tasks.',
  },
];

const testimonials = [
  {
    quote: "GearLink has transformed how we manage our inventory. Our sales have increased by 25% because we always have the right parts in stock.",
    name: "Rajesh Kumar",
    company: "Kumar Auto Spares, Delhi",
    image: {
        src: "https://picsum.photos/seed/customer1/100/100",
        fallback: "RK",
        hint: "man portrait smiling"
    },
  },
  {
    quote: "The AI Part Finder is a game-changer. We can find compatible parts for any vehicle in seconds, which keeps our customers happy and coming back.",
    name: "Anita Desai",
    company: "Desai Auto Works, Mumbai",
    image: {
        src: "https://picsum.photos/seed/customer2/100/100",
        fallback: "AD",
        hint: "woman portrait professional"
    },
  },
    {
    quote: "Managing invoices and tracking payments used to be a headache. With GearLink, it's all automated and simple. I have so much more time to focus on my business.",
    name: "Vikram Pawar",
    company: "Pawar Performance, Pune",
    image: {
        src: "https://picsum.photos/seed/customer3/100/100",
        fallback: "VP",
        hint: "man mechanic"
    },
  },
];


export default function LandingPage() {
    const { user } = useAuth();
    const dashboardHref = user ? '/dashboard' : '/login';

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <Link href="/" className="flex items-center justify-center">
          <Cog className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold font-headline">GearLink</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
           <Button asChild variant="ghost">
             <Link href="/about">About Us</Link>
          </Button>
          <Button asChild>
            <Link href={dashboardHref}>Go to App</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    The Ultimate CRM for Your Auto Parts Business
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    GearLink provides all the tools you need to manage your inventory, customers, and sales in one simple platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href={dashboardHref}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/seed/hero/600/400"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="car parts garage"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Features to Streamline Your Workflow
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From smart part recommendations to detailed sales analytics, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                        Loved by Businesses Across India
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        See how GearLink is helping auto parts stores streamline their operations and boost their sales.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={testimonial.image.src} alt={testimonial.name} data-ai-hint={testimonial.image.hint} />
                                        <AvatarFallback>{testimonial.image.fallback}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-muted border-t">
        <div className="container px-4 md:px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-2 col-span-1 md:col-span-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Cog className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold font-headline">GearLink</span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        The Ultimate CRM for Your Auto Parts Business.
                    </p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-semibold">Quick Links</h4>
                    <ul className="space-y-1">
                        <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
                        <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                        <li><Link href={dashboardHref} className="text-sm text-muted-foreground hover:text-primary">Enter App</Link></li>
                        <li><Link href="/support" className="text-sm text-muted-foreground hover:text-primary">Help & Support</Link></li>
                    </ul>
                </div>
                 <div className="space-y-2">
                    <h4 className="font-semibold">Legal</h4>
                    <ul className="space-y-1">
                        <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                        <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
             <div className="flex flex-col sm:flex-row items-center justify-between mt-8 border-t pt-6">
                <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} GearLink. All rights reserved.
                </p>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

    
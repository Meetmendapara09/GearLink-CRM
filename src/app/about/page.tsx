
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Cog, Users, Target, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images.json';

const teamMembers = [
  {
    name: 'Rohan Sharma',
    role: 'Founder & CEO',
    image: placeholderImages.team.rohan,
    description: 'Rohan is a passionate automotive enthusiast with over 15 years of experience in the auto parts industry. He founded GearLink to empower local businesses with modern technology.',
  },
  {
    name: 'Priya Mehta',
    role: 'Head of Technology',
    image: placeholderImages.team.priya,
    description: 'Priya is a software architect with a knack for building scalable and user-friendly applications. She leads the development of the GearLink platform.',
  },
  {
    name: 'Vikram Singh',
    role: 'Customer Success Manager',
    image: placeholderImages.team.vikram,
    description: 'Vikram ensures that every GearLink customer has a smooth and successful experience. He is dedicated to helping businesses grow.',
  },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Cog className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold font-headline">GearLink</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
           <Button asChild variant="ghost">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Go to App</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              About GearLink
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
              We are a team of automotive and technology enthusiasts dedicated to helping auto parts businesses in India thrive in the digital age.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">From a Small Garage to a Leading CRM</h2>
                <p className="text-muted-foreground">
                  GearLink started in a small garage in Delhi, born from a simple observation: local auto parts shops were struggling to keep up with the big players. They needed a tool that was powerful, easy to use, and affordable. We decided to build that tool. Today, GearLink is a trusted partner for hundreds of businesses across India, helping them manage their inventory, customers, and sales with confidence.
                </p>
              </div>
               <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Empowering Local Auto Parts Businesses</h2>
                <p className="text-muted-foreground">
                  Our mission is to provide independent auto parts stores with the technology they need to compete and succeed. We believe that by simplifying complex processes like inventory management and sales tracking, we can empower business owners to focus on what they do best: serving their customers. We are committed to building a platform that is not only powerful but also intuitive and tailored to the unique needs of the Indian market.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 bg-muted/20">
            <div className="container px-4 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Values</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">The Principles That Drive Us</h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full p-3">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold">Customer-Centric</h3>
                        <p className="text-sm text-muted-foreground">We succeed when our customers succeed. We are committed to listening to their needs and building solutions that solve real-world problems.</p>
                    </div>
                     <div className="flex flex-col items-center text-center gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full p-3">
                            <Target className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold">Simplicity</h3>
                        <p className="text-sm text-muted-foreground">We believe powerful software doesn't have to be complicated. We strive for simplicity and ease-of-use in everything we build.</p>
                    </div>
                     <div className="flex flex-col items-center text-center gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full p-3">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold">Integrity</h3>
                        <p className="text-sm text-muted-foreground">We operate with honesty and transparency. Building trust with our customers and partners is our top priority.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                 <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Meet the People Behind GearLink
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're a dedicated team of builders, thinkers, and problem-solvers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 mt-12">
              {teamMembers.map((member) => (
                <Card key={member.name} className="text-center">
                  <CardContent className="flex flex-col items-center pt-6">
                    <Image
                      src={member.image.src}
                      width={member.image.width}
                      height={member.image.height}
                      alt={member.name}
                      data-ai-hint={member.image.hint}
                      className="aspect-square w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

    